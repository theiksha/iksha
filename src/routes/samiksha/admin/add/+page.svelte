<script>
  import Header from "$lib/comps/header.svelte";
  import { db } from "$lib/firebase";
  import { setDoc, doc, collection, getDocs } from "firebase/firestore";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import * as XLSX from "xlsx";
  import bcrypt from "bcryptjs";

let uid = "";

let name = "";

let email = "";

let username = "";

let password = "";

let institutionName = "";

let coreResearchArea = "";

let discipline = "";

let scholarType = "";

let iksThemes = "";

let professionalBio = "";

let photo = "";

let role = "speaker";

let file = null;

let user;

let loading = false;

let bulkLoading = false;

let progress = 0;

let status = "";

// 🔙 BACK
function goBack() {

  goto("/samiksha/admin");
}

// GET COOKIE
function getCookie(name) {

  const cname = name + "=";

  const decodedCookie =
    decodeURIComponent(
      document.cookie
    );

  const ca =
    decodedCookie.split(";");

  for (let c of ca) {

    c = c.trim();

    if (
      c.indexOf(cname) === 0
    ) {

      return c.substring(
        cname.length
      );
    }
  }

  return "";
}

// ADMIN AUTH
onMount(async () => {

  const session =
    getCookie("user");

  user = session
    ? JSON.parse(session)
    : null;

  // NOT ADMIN
  if (
    !user ||
    user.role !== "admin"
  ) {

    goto("/samiksha/login");

    return;
  }

  //  EXPIRY CHECK
  if (
    Date.now() >
    user.expiry
  ) {

    goto("/samiksha/login");

    return;
  }

  //  LOAD UID
  uid = await getNextUID();
});

//  NEXT UID
async function getNextUID() {

  const snap =
    await getDocs(
      collection(db, "profiles")
    );

  let maxUID = 100;

  snap.forEach(d => {

    const num =
      Number(
        d.data()?.uid
      );

    if (
      !isNaN(num) &&
      num >= 101 &&
      num > maxUID
    ) {

      maxUID = num;
    }
  });

  return String(maxUID + 1);
}

// 🔥 DUPLICATE CHECK
async function checkDuplicate(
  email,
  username
) {

  const snap =
    await getDocs(
      collection(db, "users")
    );

  for (let d of snap.docs) {

    const u = d.data();

    //  EMAIL
    if (
      String(u.email)
        .toLowerCase() ===
      String(email)
        .toLowerCase()
    ) {

      throw new Error(
        "Email already exists"
      );
    }

    //  USERNAME
    if (
      username &&
      String(u.username)
        .toLowerCase() ===
      String(username)
        .toLowerCase()
    ) {

      throw new Error(
        "Username already exists"
      );
    }
  }
}

// 🔥 CREATE SPEAKER
async function submit() {

  //  VALIDATION
  if (

    !name ||

    !email ||

    !username ||

    !password ||

    !discipline

  ) {

    alert(
      "Name, Email, Username, Password and Discipline are required"
    );

    return;
  }

  try {

    loading = true;

    //  CLEAN VALUES
    name =
      name.trim();

    email =
      email.trim();

    username =
      username.trim();

    institutionName =
      institutionName.trim();

    coreResearchArea =
      coreResearchArea.trim();

    scholarType =
      scholarType.trim();

    iksThemes =
      iksThemes.trim();

    professionalBio =
      professionalBio.trim();

    photo =
      photo.trim();

    status =
      "Checking duplicates...";

    //  FIXED
    await checkDuplicate(
      email,
      username
    );

    status =
      "Generating UID...";

    const newUID =
      await getNextUID();

    //  HASH PASSWORD
    status =
      "Securing password...";

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    //  CREATE PROFILE
    status =
      "Creating profile...";

    await setDoc(
      doc(
        db,
        "profiles",
        newUID
      ),
      {

        uid: newUID,

        name,

        email,

        username,

        institutionName,

        coreResearchArea,

        discipline,

        scholarType,

        iksThemes,

        professionalBio,

        photo:
          photo ||
          "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
      }
    );

    //  CREATE USER
    status =
      "Creating user...";

    await setDoc(
      doc(
        db,
        "users",
        newUID
      ),
      {

        uid: newUID,

        name,

        email,

        username,

        password:
          hashedPassword,

        role,

        submitted: false
      }
    );

    //  RESET FORM
    name = "";

    email = "";

    username = "";

    password = "";

    institutionName = "";

    coreResearchArea = "";

    discipline = "";

    scholarType = "";

    iksThemes = "";

    professionalBio = "";

    photo = "";

    //  NEW UID
    uid =
      await getNextUID();

    alert(
      "Profile created successfully "
    );

  } catch (err) {

    console.error(err);

    alert(
      err.message ||
      "Error creating user"
    );

  } finally {

    loading = false;

    status = "";
  }
}

//  DOWNLOAD TEMPLATE
function downloadTemplate() {

  const data = [{

    "Name":
      "John Doe",

    "Email ID":
      "john@example.com",

    "Username":
      "john",

    "Password":
      "123456",

    "Institution Name":
      "Banaras Hindu University",

    "Core Research Area":
      "Indian Knowledge Systems",

    "Discipline":
      "Philosophy",

    "Scholar Type":
      "Professor",

    "3 Themes within IKS that excites you Personally":
      "Yoga, Ayurveda, Sanskrit",

    "Brief Professional Bio":
      "Professor and researcher in IKS.",

    "Photo":
      "https://example.com/photo.jpg"
  }];

  // SHEET
  const ws =
    XLSX.utils.json_to_sheet(
      data
    );

  //  COLUMN WIDTHS
  ws["!cols"] = [

    { wch: 28 }, // name
    { wch: 35 }, // email
    { wch: 22 }, // username
    { wch: 18 }, // password
    { wch: 40 }, // institution
    { wch: 45 }, // research
    { wch: 25 }, // discipline
    { wch: 22 }, // scholar type
    { wch: 50 }, // themes
    { wch: 65 }, // bio
    { wch: 45 }  // photo
  ];

  //  WORKBOOK
  const wb =
    XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    wb,
    ws,
    "Speakers"
  );

  //  DOWNLOAD
  XLSX.writeFile(
    wb,
    "speaker_template.xlsx"
  );
}

//  BULK UPLOAD
async function bulkUpload() {

  if (!file) {

    alert(
      "Upload Excel file first"
    );

    return;
  }

  bulkLoading = true;

  progress = 0;

  const reader =
    new FileReader();

  reader.onload =
    async (e) => {

    try {

      const data =
        new Uint8Array(
          e.target.result
        );

      const workbook =
        XLSX.read(
          data,
          {
            type: "array"
          }
        );

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      const json =
        XLSX.utils.sheet_to_json(
          sheet
        );

      //  EMPTY FILE
      if (!json.length) {

        alert(
          "Excel file is empty"
        );

        return;
      }

      const total =
        json.length;

      for (
        let i = 0;
        i < total;
        i++
      ) {

        const row =
          json[i];

        status =
          `Processing ${i + 1} / ${total}`;

        //  CLEAN VALUES
        const name =
          String(
            row["Name"] || ""
          ).trim();

        const email =
          String(
            row["Email ID"] || ""
          ).trim();

        const username =
          String(
            row["Username"] || ""
          ).trim();

        const password =
          String(
            row["Password"] || "123456"
          ).trim();

        const institutionName =
          String(
            row["Institution Name"] || ""
          ).trim();

        const coreResearchArea =
          String(
            row["Core Research Area"] || ""
          ).trim();

        const discipline =
          String(
            row["Discipline"] || ""
          ).trim();

        const scholarType =
          String(
            row["Scholar Type"] || ""
          ).trim();

        const iksThemes =
          String(
            row["3 Themes within IKS that excites you Personally"] || ""
          ).trim();

        const professionalBio =
          String(
            row["Brief Professional Bio"] || ""
          ).trim();

        const photo =
          String(
            row["Photo"] || ""
          ).trim();

        //  REQUIRED
        if (
          !name ||
          !email ||
          !username ||
          !discipline
        ) {

          throw new Error(
            `Row ${i + 1}: Missing required fields`
          );
        }

        //  CHECK DUPLICATE
        await checkDuplicate(
          email,
          username
        );

        //  UID
        const newUID =
          await getNextUID();

        //  HASH PASSWORD
        const hashedPassword =
          await bcrypt.hash(
            password,
            10
          );

        //  CREATE PROFILE
        await setDoc(
          doc(
            db,
            "profiles",
            newUID
          ),
          {

            uid: newUID,

            name,

            email,

            username,

            institutionName,

            coreResearchArea,

            discipline,

            scholarType,

            iksThemes,

            professionalBio,

            photo:
              photo ||
              "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          }
        );

        //  CREATE USER
        await setDoc(
          doc(
            db,
            "users",
            newUID
          ),
          {

            uid: newUID,

            name,

            email,

            username,

            password:
              hashedPassword,

            role: "speaker",

            submitted: false
          }
        );

        //  PROGRESS
        progress =
          Math.round(
            ((i + 1) / total) * 100
          );
      }

      alert(
        "Bulk upload completed "
      );

      goto("/samiksha/admin");

    } catch (err) {

      console.error(err);

      alert(
        err.message ||
        "Bulk upload failed"
      );

    } finally {

      bulkLoading = false;

      progress = 0;

      status = "";
    }
  };

  reader.readAsArrayBuffer(file);
}
</script>

<div class="container">

  <div class="header">
    
    <h2>Add Speaker Profile</h2>
  </div>

  <!-- BULK -->
<div class="card">

  <h3>Bulk Upload</h3>

  <div class="row">
    <button on:click={downloadTemplate}>Download Template</button>

    <input type="file" accept=".xlsx,.xls"
      on:change={(e) => file = e.target.files[0]} />

    <button on:click={bulkUpload} disabled={bulkLoading}>
      {bulkLoading ? "Uploading..." : "Upload Excel"}
    </button>
  </div>

  {#if bulkLoading}
    <div class="progress-box">
      <p>{status}</p>
      <div class="bar">
        <div class="fill" style="width:{progress}%"></div>
      </div>
    </div>
  {/if}

</div>

  <!-- FORM -->
<!-- FORM -->
<div class="card">

  <h3>Manual Entry</h3>

  <div class="form-grid">

    <!-- UID -->
    <div>
      <label>UID</label>

      <input
        value={uid}
        readonly
      />
    </div>

    <!-- NAME -->
    <div>
      <label>Name *</label>

      <input
        bind:value={name}
        placeholder="Enter full name"
      />
    </div>

    <!-- EMAIL -->
    <div>
      <label>Email ID *</label>

      <input
        type="email"
        bind:value={email}
        placeholder="Enter email"
      />
    </div>

    <!-- USERNAME -->
    <div>
      <label>Username *</label>

      <input
        bind:value={username}
        placeholder="Enter username"
      />
    </div>

    <!-- PASSWORD -->
    <div>
      <label>Password *</label>

      <input
        type="password"
        bind:value={password}
        placeholder="Enter password"
      />
    </div>

    <!-- SCHOLAR TYPE -->
    <div>

      <label>Scholar Type</label>

      <input
        bind:value={scholarType}
        placeholder="Professor / Researcher / Student"
      />

    </div>

    <!-- PHOTO -->
    <div class="full">

      <label>Photo URL</label>

      <input
        bind:value={photo}
        placeholder="Paste image URL"
      />

      {#if photo}

        <img
          src={photo}
          alt="Preview"
          class="preview"
        />

      {/if}

    </div>

    <!-- INSTITUTION -->
    <div>
      <label>
        Institution Name
      </label>

      <input
        bind:value={institutionName}
        placeholder="Institution name"
      />
    </div>

    <!-- RESEARCH -->
    <div>
      <label>
        Core Research Area
      </label>

      <input
        bind:value={coreResearchArea}
        placeholder="Research area"
      />
    </div>

    <!-- DISCIPLINE -->
    <div class="full">

      <label>Discipline *</label>

      <select bind:value={discipline}>

        <option value="">
          Select Discipline
        </option>

        <option value="Contemporary Social/ Cultural Sciences">
          Contemporary Social/ Cultural Sciences
        </option>

        <option value="Mathematical, Physical and Astronomical Sciences">
          Mathematical, Physical and Astronomical Sciences
        </option>

        <option value="Speech and Linguistics">
          Speech and Linguistics
        </option>

        <option value="Medical and Health Science">
          Medical and Health Science
        </option>

        <option value="Political, Economic and Strategic Sciences">
          Political, Economic and Strategic Sciences
        </option>

        <option value="Culinary, Nutritional and Pharmacological Sciences">
          Culinary, Nutritional and Pharmacological Sciences
        </option>

        <option value="Performing Arts">
          Performing Arts
        </option>

        <option value="Mechanical &amp; Digital Design &amp; Engineering">
          Mechanical & Digital Design & Engineering
        </option>

        <option value="Civil and Architectural Science">
          Civil and Architectural Science
        </option>

        <option value="Fine Arts and Sculpture">
          Fine Arts and Sculpture
        </option>

        <option value="Chemical, Metallurgical &amp; Material Sciences">
          Chemical, Metallurgical & Material Sciences
        </option>

        <option value="Fashion and Interior Design">
          Fashion and Interior Design
        </option>

        <option value="Agricultural Science, Veterinary &amp; Animal Husbandry">
  Agricultural Science, Veterinary &amp; Animal Husbandry
</option>

        <option value="Edutainment Sciences">
          Edutainment Sciences
        </option>

        <option value="Vedic Philosophical and Cognitive Sciences">
          Vedic Philosophical and Cognitive Sciences
        </option>

        <option value="Historical and Civilizational Sciences">
          Historical and Civilizational Sciences
        </option>

      </select>

    </div>

    <!-- IKS THEMES -->
    <div class="full">

      <label>
        3 Themes within IKS that excites you Personally
      </label>

      <textarea
        bind:value={iksThemes}
        placeholder="Theme 1, Theme 2, Theme 3"
      ></textarea>

    </div>

    <!-- BIO -->
    <div class="full">

      <label>
        Brief Professional Bio
      </label>

      <textarea
        bind:value={professionalBio}
        placeholder="Write professional bio"
      ></textarea>

    </div>

  </div>

  <!-- SUBMIT -->
<button
  class="submit"
  on:click={() => submit()}
  disabled={loading}
>
  {#if loading}
    {status || "Processing..."}
  {:else}
    Create Speaker
  {/if}
</button>

  <!-- BACK -->
  <button
    class="back-btn"
    on:click={goBack}
  >
    ← Back
  </button>


</div>
</div>

<style>
/* ===== RESET ===== */
* {
  box-sizing: border-box;
}

/* ===== PAGE ===== */
body {
  background: #f7f7f7;
}

/* ===== CONTAINER ===== */
.container {
  max-width: 950px;
  margin: 40px auto;
  padding: 20px;
}

/* ===== HEADER ===== */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 25px;
}

.header h2 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #222;
}

/* ===== CARD ===== */
.card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
}

.card h3 {
  margin-bottom: 18px;
  font-size: 20px;
  color: #222;
}

/* ===== ROW ===== */
.row {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* ===== FILE INPUT ===== */
.row input[type="file"] {
  flex: 1;
  min-width: 220px;
  padding: 10px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  background: #fafafa;
}

/* ===== FORM GRID ===== */

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  margin-top: 15px;
  align-items: start;
}

/* ===== FULL WIDTH ===== */
.full {
  grid-column: span 2;
}

/* ===== LABEL ===== */
label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #444;
}

/* ===== INPUTS ===== */
input,
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 14px;
  background: white;
  transition: all 0.2s ease;
}

/* ===== INPUT FOCUS ===== */
input:focus,
select:focus,
textarea:focus {
  border-color: #f5943d;
  outline: none;
  box-shadow: 0 0 0 3px rgba(245,148,61,0.15);
}

/* ===== TEXTAREA ===== */
textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.5;
}

/* ===== IMAGE PREVIEW ===== */
.preview {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px auto;
  display: block;
  border: 4px solid #fff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
}

/* ===== BUTTONS ===== */
button {
  border: none;
  border-radius: 10px;
  padding: 12px 16px;
  background: #f5943d;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  opacity: 0.92;
  transform: translateY(-1px);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===== SUBMIT ===== */
.submit {
  width: 100%;
  margin-top: 20px;
  font-size: 15px;
}

/* ===== BACK BUTTON ===== */
.back-btn {
  display: block;
  margin: 14px auto 0;
  background: transparent;
  color: #f5943d;
  border: none;
  font-weight: 600;
}

/* ===== PROGRESS ===== */
.progress-box {
  margin-top: 15px;
}

.progress-box p {
  margin-bottom: 8px;
  font-size: 13px;
  color: #555;
}

.bar {
  width: 100%;
  height: 12px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
}

.fill {
  height: 100%;
  background: #f5943d;
  transition: width 0.3s ease;
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {

  .container {
    padding: 15px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .full {
    grid-column: span 1;
  }

  .row {
    flex-direction: column;
    align-items: stretch;
  }

  .row button,
  .row input {
    width: 100%;
  }

  .header h2 {
    font-size: 22px;
    text-align: center;
  }

  .card {
    padding: 18px;
  }
}
</style>