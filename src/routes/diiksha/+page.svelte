<script>
	let activeIndex = -1;

	const pillars = [
	{
		"number": "01",
		"title": "Financial Sustenance",
		"description": "\n\t\t\t\t<strong>a. PhD Fellowships</strong><br>\n\t\t\t\t₹40,000/month (Years 1–2)<br>\n\t\t\t\t₹50,000/month (Years 3–4)<br><br>\n\n\t\t\t\t<strong>b. Post-Doctoral Fellowships</strong><br>\n\t\t\t\t₹80,000/month for up to two years.\n\t\t\t",
		"icon": "₹"
	},
	{
		"number": "02",
		"title": "Traditional Mentorship",
		"description": "\n\t\t\t\tA dedicated Traditional Mentorship framework formally integrating a lineage keeper into the researcher's journey. DIIKSHA provides an honorarium of up to ₹1 Lakh per year to traditional scholars to sustain this vital guidance.\n\t\t\t",
		"icon": "📖"
	},
	{
		"number": "03",
		"title": "Civilizational Immersion",
		"description": "\n\t\t\t\tResearch embedded in Bharat's sacred geography.\n\n\t\t\t\tIncludes Antevāsin Experience,\n\t\t\t\tcivilizational exposure visits,\n\t\t\t\tand experiential engagement with\n\t\t\t\ttraditional knowledge systems.\n\t\t\t",
		"icon": "🪷"
	},
	{
		"number": "04",
		"title": "Scholarly Support",
		"description": "\n\t\t\t\tTraining in IKS foundations,\n\t\t\t\tresearch methodology,\n\t\t\t\tacademic writing standards,\n\t\t\t\tprimary texts, books and scholarly resources.\n\t\t\t",
		"icon": "📚"
	}
];

	const accordions = [
	{
		"title": "Application Streams",
		"content": "\n\t\t<div class=\"architecture-content\">\n<p>To accommodate diverse applicant profiles, DIIKSHA offers three streams for PhD applications and two\nfor Post-Doctoral fellowships.\n</p>\n\t\t\t<div class=\"support-card\">\n\t\t\t\t<h4>PhD Fellowships/Grants (4 years):</h4>\n\n\t\t\t\t<p>\n\t\t\t\t\t<strong>1. Supervisor-Initiated Stream:</strong>\n\t\t\t\t\tSupervisors at recognized institutions apply to secure\nfunding/support for a new PhD student. If approved, the supervisor must recruit a suitable\ncandidate within six months, who must also be vetted through the DIIKSHA screening system.\n\n\t\t\t\t</p>\n\n\t\t\t\t<p>\n\t\t\t\t\t<strong>2. Prospective Student Stream:</strong>\n\t\t\t\t\t Individuals not yet enrolled or admitted to any institute for PhD\ncan apply. The fellowship support activates upon formal admission.\n\t\t\t\t</p>\n\n\t\t\t\t<p>\n\t\t\t\t\t<strong>3. Current Student Stream (Lateral Entry):</strong>\n\t\t\t\t\tCurrently enrolled PhD students (ideally in their first\nyear or having just completed one year), as well as those who have recently secured admission\nand are yet to formally join, can apply. Applicants without existing financial support may apply\nfor the DIIKSHA Fellowship, while those holding institutional fellowships (e.g., JRF/SRF\n/Institute fellowship) should apply for the DIIKSHA Grant.\n\t\t\t</div>\n\n\t\t\t<div class=\"support-card\">\n\t\t\t\t<h4>Post-Doctoral Fellowships:</h4>\n\n\t\t\t\t<p>\n\t\t\t\t\t<strong>1. Supervisor-Initiated Stream:</strong>\n\t\t\t\t\t Supervisors apply to secure funding for a postdoc position in their\nresearch group. If approved, the supervisor must recruit a suitable candidate within six months,\nwho must be vetted through the DIIKSHA screening system, also\n\t\t\t\t</p>\n\n\t\t\t\t<p>\n\t\t\t\t\t<strong>2. Individual Stream:</strong>\n\t\t\t\t\t Postdoc aspirants apply directly with a research proposal and a prospective host institution and guide.\n\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t</div>\n\t"
	},
	{
		"title": "Research Areas",
		"content": " \n\n<div class=\"architecture-content\">\n\t<p>\n\t\tDIIKSHA invites proposals at the multidisciplinary interface of\n\t\tIndian Knowledge Systems (IKS) and Contemporary Knowledge Systems (CKS).\n\t\tThe following list of research areas is tentative and indicative:\n\t</p>\n\n\t<div class=\"support-card\">\n\t\t<ul>\n\t\t\t<li><strong>आन्वीक्षिकी विभाग</strong> / Ānvīkṣikī Vibhāga / Vedic Philosophy and Cognitive Sciences</li>\n\n\t\t\t<li><strong>इतिहास एवं सभ्यता विभाग</strong> / Itihāsa evaṃ Sabhyatā Vibhāga / Historical and Civilizational Studies</li>\n\n\t\t\t<li><strong>लौकिकशास्त्र विभाग</strong> / Laukikaśāstra Vibhāga / Contemporary Social & Cultural Studies</li>\n\n\t\t\t<li><strong>गणित-भौत-ज्योतिष विभाग</strong> / Gaṇita-Bhauta-Jyotiṣa Vibhāga / Mathematical, Physical and Astronomical Sciences</li>\n\n\t\t\t<li><strong>वाग्विभाग</strong> / Vāgvibhāga / Speech and Linguistics</li>\n\n\t\t\t<li><strong>राजनीति एवं अर्थशास्त्र विभाग</strong> / Rājanīti evaṃ Arthaśāstra Vibhāga / Political, Economic and Strategic Thought</li>\n\n\t\t\t<li><strong>भैषज्य एवं आरोग्य विभाग</strong> / Bhaiṣajya evaṃ Ārogya Vibhāga / Medical and Health Sciences</li>\n\n\t\t\t<li><strong>द्रव्य-गुण-संयोग विभाग</strong> / Dravya-Guṇa-Saṃyoga Vibhāga / Culinary, Nutritional and Pharmacological Systems</li>\n\n\t\t\t<li><strong>कृषि एवं पशुपाल्य विभाग</strong> / Kṛṣi evaṃ Paśupālya Vibhāga / Agricultural Science, Veterinary and Animal Husbandry</li>\n\n\t\t\t<li><strong>गांधर्व विभाग</strong> / Gāndharva Vibhāga / Performing Arts</li>\n\n\t\t\t<li><strong>यांत्रिक एवं नव्य अभियान्त्रिकी विभाग</strong> / Yāntrika evaṃ Navya Abhiyāntrikī Vibhāga / Mechanical & Digital Design and Engineering</li>\n\n\t\t\t<li><strong>वास्तु विभाग</strong> / Vāstu Vibhāga / Civil and Architectural Studies</li>\n\n\t\t\t<li><strong>शिल्प-आलेख्य विभाग</strong> / Śilpa-Ālekhya Vibhāga / Fine Arts and Sculpture</li>\n\n\t\t\t<li><strong>रस-धातु विभाग</strong> / Rasa-Dhātu Vibhāga / Chemical, Metallurgical and Material Sciences</li>\n\n\t\t\t<li><strong>अलङ्कारणादि विभाग</strong> / Alaṅkaraṇādi Vibhāga / Fashion and Interior Design</li>\n\n\t\t\t<li><strong>शैक्षणिक-क्रीड़नीयक विभाग</strong> / Śaikṣaṇika-Krīḍanīyaka Vibhāga / Edutainment Systems and Design</li>\n\t\t</ul>\n\t</div>\n\n</div>\n"
	},
	{
		"title": "Application Process",
		"content": " \n\t\t\t<div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n\n\t\t<p>\n\t\t\tApplicants must complete the online application form and submit\n\t\t\tall supporting documents. Proposals are reviewed quarterly in\n\t\t\t<strong>March, June, September, and December</strong>.\n\t\t\tApproved proposals must commence research within six months.\n\t\t</p>\n\t</div>\n\t\t<h4>Application Components</h4>\n\t\n\t\t<div class=\"comparison-table\">\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>Application Component</th>\n\t\t\t\t\t\t<th>PhD (Supervisor)</th>\n\t\t\t\t\t\t<th>PhD (Prospective)</th>\n\t\t\t\t\t\t<th>PhD (Current)</th>\n\t\t\t\t\t\t<th>Post-Doc (Supervisor)</th>\n\t\t\t\t\t\t<th>Post-Doc (Individual)</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Applicant CV</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Research Proposal</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Statement of Purpose (SoP)</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Letters of Recommendation (Min. 2)</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Supervisor Endorsement</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Coursework / Transcripts</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Research Problem / Progress Report</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>PhD Admission / Enrollment Letter</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Thesis Synopsis & Publications</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td>—</td>\n\t\t\t\t\t\t<td class=\"check\">✅</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<p style=\"margin-top:20px;\">\n\t\t\t<strong>Note:</strong> For the PhD Current Student Stream,\n\t\t\trequirements such as the research problem statement, progress\n\t\t\treport, and coursework details may vary depending on whether\n\t\t\tthe applicant is currently undertaking coursework or has\n\t\t\tcompleted it.\n\t\t</p>\n\t</div>\n\n</div>\n"
	},
	{
		"title": "Statement of Purpose (SoP) Guidelines",
		"content": " <div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n\n\t\t<p>\n\t\tSubmission of a Statement of Purpose (SoP) is mandatory for all student applicants. Your Statement of\nPurpose should present a thoughtful reflection on your academic journey, intellectual motivations, and\ncommitment to the DIIKSHA mission. It should demonstrate the convergence of scholarly rigor, cultural\ngrounding, and your potential to contribute to civilizational leadership through the study and\nadvancement of Bharatiya Jñāna Paramparā (Indian Knowledge Systems). As this is a personal\nstatement and the most significant part of your application, we encourage you to minimize the use of AI\ntools. Please provide an honest, sincere reflection that details the following dimensions\n\t\t</p>\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<strong>Personal Trajectory:</strong>\n\t\t\t\tWhat personal experiences, intellectual influences, or\n\t\t\t\tacademic inquiries drew you to the rigorous study of\n\t\t\t\tBharatiya Jñāna Paramparā (Indian Knowledge Systems)?\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Research Vision:</strong>\n\t\t\t\tOutline your chosen domain within Indian Knowledge Systems,\n\t\t\t\tyour broader research vision, and your potential contribution\n\t\t\t\tto IKS scholarship and practice. If you have identified a\n\t\t\t\tspecific research question, discuss its significance,\n\t\t\t\ttheoretical frameworks, methodology, novel aspects, and\n\t\t\t\texpected outcomes.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Academic & Linguistic Readiness:</strong>\n\t\t\t\tDescribe your academic preparation, coursework, research\n\t\t\t\texperience, publications, projects, traditional learning,\n\t\t\t\tand proficiency in relevant primary-source languages such\n\t\t\t\tas Sanskrit, Tamil, Kannada, Prakrit, Pali, or others.\n\t\t\t\tExplain how you plan to integrate traditional IKS approaches\n\t\t\t\twith contemporary research methodologies.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Cultural Grounding & Alignment:</strong>\n\t\t\t\tDIIKSHA scholars participate in at least two weeks of annual\n\t\t\t\tcivilizational immersion, including the Antevāsin Experience\n\t\t\t\tand curated exposure visits across Bharat's civilizational\n\t\t\t\tlandscapes. Reflect on your readiness for such experiential\n\t\t\t\tengagement with traditional wisdom.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Scholarly Dharma:</strong>\n\t\t\t\tHow do you envision fulfilling your civilizational responsibility during and\nafter the fellowship (e.g., building local IKS ecosystems in your institute, public outreach and\nengagement plans)? Discuss how you plan to contribute to the growth of IKS ecosystems through\nresearch, teaching, mentorship, institution-building, public engagement, community initiatives,\npolicy contributions, or other forms of knowledge dissemination and societal impact.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Intended Institution and Supervisor (Optional):</strong>\n\t\t\t\tIndicate the institution and/or supervisor with\nwhom you intend to pursue your research, and briefly explain why they are well-suited to\nsupport your proposed IKS area of study. Applicants who have not yet identified a specific\ninstitution or supervisor may leave this section blank.\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n<p style=\"margin-top:20px;\">\n\t\t\t<strong>Formatting: </strong> Double-spaced, 11-point Times New Roman, 1-inch margins.\n\n\t\t</p>\n\n</div>\n"
	},
	{
		"title": "Research Proposal Guidelines",
		"content": " <div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n\t\t<p>\n\t\t\tResearch proposals are mandatory for only the supervisor and postdoc applicants. Proposals should\nfollow the structure below (approx. 2000–3000 words total):\n\n\t\t</p>\n\n\t\t<ol>\n\t\t\t<li>\n\t\t\t\t<strong>Title of Research : </strong> A clear, descriptive title.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Abstract : </strong>\n\t\t\t\t A brief summary (max 250 words) covering the problem, methodology, and expected\nsignificance.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Introduction & Problem Statement : </strong> Clearly define the research problem, the specific gap in\nknowledge, and why it is critical to address now.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Literature Review & IKS Contextualization : </strong>Review existing academic research and traditional\nscholarly sources. Explain how your work bridges modern scholarship with the Bharatiya Jñāna\nParamparā (Indian Knowledge Systems).\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Research Objectives & Questions : </strong>State the primary objectives and specific research questions.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Methodology : </strong>Detail the research methods. Explain how you integrate traditional IKS\napproaches (e.g., shastra-based analysis) with contemporary research methods.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Significance & Expected Outcomes : </strong>Explain the potential impact on IKS scholarship, civilizational resurgence, and practical societal applications.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Timeline : </strong>Provide a high-level roadmap for the research phases.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>References : </strong> List all cited works in a consistent academic format.\n\n\t\t\t</li>\n\t\t</ol>\n\t</div>\n\n        <p style=\"margin-top:20px;\">\n\t\t\t<strong>Formatting : </strong> Double-spaced, 11-point Times New Roman, 1-inch margins.\n\n\t\t</p>\n\n</div>\n"
	},
	{
		"title": "Evaluation Criteria and Process",
		"content": " <div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n\t\t<p>\n\t\t\tProposals will be evaluated based on:\n\t\t</p>\n\n\t\t<ol>\n\t\t\t<li>\n\t\t\t\t<strong>Applicant's Qualifications : </strong> Evidence of skills and dedication to IKS research.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Originality and Significance : </strong>Addressing a key gap or question in IKS with innovative perspectives.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Methodological Rigor : </strong>Use of robust and appropriate research methods\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Feasibility : </strong>Realistic scope and achievable milestones.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Impact : </strong>Potential to advance IKS through scholarly or practical outputs.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Alignment with IKSHA's Mission : </strong>Relevance to IKSHA’s goals of promoting IKS.\n\n\t\t\t</li>\n\t\t</ol>\n\n\t\t<p>\n\t\t\tThe evaluation process involves a rigorous peer review by IKSHA’s internal committee, with external\nexperts consulted as needed. Following the initial review, all shortlisted candidates must participate in a\npersonal interview as a mandatory step in the selection process. Applicants may be required to revise\ntheir proposals or provide additional details based on reviewer feedback.\n\t\t</p>\n\n\t</div>\n\n</div>\n"
	},
	{
		"title": "Terms and Conditions",
		"content": " <div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n\t\t<p>\n\t\t\tRecipients of DIIKSHA comprehensive fellowship or DIIKSHA enrichment grant, designated as\n“DIIKSHA Fellows,” are expected to:\n\t\t</p>\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\tParticipate in biannual progress reviews with the DIIKSHA committee, or at such frequency as\nmandated by the committee, which involves submitting formal progress reports and delivering\npresentations.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tPresent research at the annual IKS Academic Conference or other designated events.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tAcademic Deliverables & Publications:\n\t\t\t\t<ul>\n\t\t\t\t<li>\n\t\t\t\tFor PhD Fellows: Produce at least two peer-reviewed journal publications (or equivalent\noutputs, such as patents or products) by the end of the funding period.\n\t\t\t\t</li>\n\t\t\t\t<li>For Post-Doctoral Fellows: \n\t\t\t\t<ul>\n\t\t\t\t<li>Focus on high-quality publications and completing a book based on the thesis.</li>\n\t\t\t\t<li>Alternatively, publish three high-quality peer-reviewed papers or prepare\ncredit-worthy courses based on the work</li>\n\t\t\t\t<li>Generate IKS content in Indian languages (highly encouraged).\n</li>\n\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tIt is highly encouraged that all publications are in Q1 or Q2 journals. Publication in predatory\njournals will result in the immediate suspension of the fellowship or grant, and further actions\nmay be initiated.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tParticipate in IKSHA-organized workshops, mentoring, and civilizational immersion activities.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tAcknowledge IKSHA’s support in all publications and presentations.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tCoordinate IKS activities in the institute and organize regular sessions to foster IKS awareness\namong peers at the institute.\n\t\t\t</li>\n\t\t\t<li>Recipients of the comprehensive fellowship are required to devote 8–10 hours weekly to the\nadvancement of DIIKSHA’s IKS outreach objectives.</li>\n\t\t\t<li>Adhere to ethical research standards.</li>\n\t\t\t<li>IKSHA’s decision regarding all matters related to the selection process, fellowship/grant awards,\nand general program administration shall be final and binding.</li>\n\t\t</ul>\n\t</div>\n\n</div>\n<br>\n\n\t<div class=\"support-card\">\n\t\t<h4>Tentative PhD Milestones : </h4>\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<strong>Year 1: Foundation & Proposal</strong>\n\t\t\t\tComplete mandatory coursework and obtain official approval\nfor the research proposal.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Year 2: Research & Scholarly Engagement</strong>\n\t\t\t\t Present at least one conference paper, complete one\nbook review, and submit one peer-reviewed review paper.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Year 3: Research Output & Publications</strong>\n\t\t\t\tSubmit two high-quality journal papers based on\noriginal research findings.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Year 4: Thesis Finalization</strong>\n\t\t\t\tComplete the final thesis draft, publish the required remaining\npapers, and submit the thesis for defense.\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n<br>\n\n\t<div class=\"support-card\">\n\t\t<h4>Tentative Post-Doctoral Milestones : </h4>\n\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<strong>Year 1: </strong>\n\t\t\t\tInitiate research and write a book based on the thesis or submit at least one peer-reviewed\npaper, and present research at one conference.\n\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\t<strong>Year 2: </strong>\n\t\t\t\t Complete the book manuscript or the remaining two high-quality peer-reviewed papers,\nfinalize credit-worthy course content, produce popular IKS outreach content (encouraged in\nIndian languages), and submit final fellowship reports.\n\t\t\t</li>\n\n\t\t</ul>\n\t</div>\n\n"
	},
	{
		"title": "What We Do Not Fund",
		"content": " <div class=\"architecture-content\">\n\n\t<div class=\"support-card\">\n        <ul>\n\t\t\t<li>\n\t\t\t\tPolitical or lobbying activities.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tFor-profit entities or individual grants outside PhD/Postdoc programs.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tStudent tuition fee programs.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tCreative arts projects unless tied to rigorous IKS research.\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tEndowments, fundraising, or infrastructure projects.\n\n\t\t\t</li>\n\n\t\t\t<li>\n\t\t\t\tFieldwork not directly linked to the core IKS research proposal.\n\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\n</div>\n"
	}
];
</script>

<section class="top-bar" id="home">
	<div class="overlay"></div>

	<div class="container hero-content">
		<h2>DIIKSHA</h2>
	</div>
</section>

<section id="about" class="about-section">
	<div class="container">
		<div class="about-grid">
			<div class="content">
				<div class="section-tag">Doctoral Initiative of IKS and Heritage Association</div>

				<h2>DIIKSHA</h2>

				<h3>An Integrated Architecture for Scholarly Excellence & Civilizational Leadership</h3>

				<p>
					A powerful global shift is underway right now. There is an increasing scholarly and global
					recognition that Indian Knowledge Systems (IKS) offer robust, alternative paradigms for
					addressing complex human challenges and enriching our collective intellectual heritage. To
					champion this movement, the IKS and Heritage Association (IKSHA) has launched a dedicated,
					long-term program designed to support, inspire, and nurture the next generation of
					leaders.
				</p>
			</div>

			<div class="image-wrapper">
				<img src="images/lotus-img.jpg" alt="DIIKSHA Lotus" />
			</div>
		</div>
	</div>
</section>

<section class="objectives-section">
	<div class="container">
		<div class="section-header">
			<span>OBJECTIVES</span>
			<h2>Our Objectives</h2>
		</div>

		<div class="objectives-grid">
			<div class="objective-card">
				<div class="icon">📜</div>

				<h3>Scholarly Excellence</h3>

				<p>
					To promote high-impact IKS research grounded in traditional Indian epistemological
					frameworks and contribute to new paradigms of knowledge creation for a more holistic and
					sustainable future.
				</p>
			</div>

			<div class="objective-card">
				<div class="icon">🌏</div>

				<h3>Civilizational Leadership</h3>

				<p>
					To nurture dharmically anchored scholar-leaders capable of advancing civilizational
					renewal through research, institution-building, public engagement, and knowledge
					dissemination.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="pillars-section">
	<div class="container">
		<div class="section-header">
			<span>CORE FRAMEWORK</span>
			<h2>The Four Pillars of DIIKSHA</h2>
		</div>

		<div class="pillars-grid">
			{#each pillars as pillar}
				<div class="pillar-card">
					<div class="top">
						<div class="icon">{pillar.icon}</div>
						<div class="number">{pillar.number}</div>
					</div>

					<h3>{pillar.title}</h3>

					<div class="content">
						{@html pillar.description}
					</div>
				</div>
			{/each}
		</div>

		<div class="note">
			<strong>Note:</strong>
			Pillars 3 and 4 are supported through an annual reimbursement grant of up to ₹1,00,000 to offset
			expenses related to immersion, training, travel, accommodation and scholarly resources.
		</div>
	</div>
</section>

<section class="project-specifics">
	<div class="container">
		<div class="section-header">
			<span>Comprehensive Fellowship vs. Enrichment Grant</span>
			<h2>DIIKSHA Scholarship Architectures</h2>

			<p>
				To maximize resource efficiency and ecosystem growth, DIIKSHA offers two distinct tiers of
				support tailored to a scholar's current institutional funding status:
			</p>
		</div>

		<div class="objectives-grid">
			<div class="objective-card">
				<h3>DIIKSHA Fellowship (Comprehensive Support)</h3>

				<p>
					<b>Target Candidates:</b> Promising scholars requiring full financial sustenance who currently
					do not hold an institutional fellowship.
				</p>
				<br />
				<p>
					<b>Overview:</b> Offers full access to the complete 4-pillar DIIKSHA ecosystem, including competitive
					monthly scholarships awarded for up to 4 years for PhD scholars and up to 2 years for Post-Doctoral
					Fellows, enabling dedicated focus on high-impact IKS research.
				</p>
			</div>

			<div class="objective-card">
				<h3>DIIKSHA Grant (Enrichment Support)</h3>

				<p>
					<b>Target Candidates:</b> Scholars already receiving an institutional fellowship (JRF / SRF
					/ Institute Fellowship).
				</p>
				<br />
				<p>
					<b>Overview:</b> Provides all DIIKSHA academic and mentorship provisions except the monthly
					scholarship. Designed to add civilizational depth, traditional mentorship and immersion resources
					to existing high-level research tracks.
				</p>
			</div>
		</div>

		<div class="comparison-table" style="margin-top: 30px; margin-bottom: 30px;">
			<table>
				<thead>
					<tr>
						<th>Pillar Feature</th>
						<th>DIIKSHA Fellowship</th>
						<th>DIIKSHA Grant</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<strong>Financial Sustenance</strong><br />
							<small>(Monthly Scholarship)</small>
						</td>
						<td class="check">✅</td>
						<td>—</td>
					</tr>

					<tr>
						<td>
							<strong>Traditional Mentorship</strong><br />
							<small>(Mentor Honorarium)</small>
						</td>
						<td class="check">✅</td>
						<td class="check">✅</td>
					</tr>

					<tr>
						<td>
							<strong>Civilizational Immersion</strong>
						</td>
						<td class="check">✅</td>
						<td class="check">✅</td>
					</tr>

					<tr>
						<td>
							<strong>Scholarly Support</strong>
						</td>
						<td class="check">✅</td>
						<td class="check">✅</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="accordion-wrapper">
			{#each accordions as item, index}
				<div class="accordion-item">
					<button
						class="accordion-header"
						on:click={() => (activeIndex = activeIndex === index ? -1 : index)}
					>
						<span>{item.title}</span>

						<div class:open={activeIndex === index} class="plus">+</div>
					</button>

					{#if activeIndex === index}
						<div class="accordion-content">
							{@html item.content}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="apply" class="apply-section">
	<div class="container">
		<div class="apply-grid">
			<div class="apply-content">
				<h2>Apply for DIIKSHA</h2>
				<p style="color: white;">
					Submit your application by <span style="text-decoration: underline; color: yellow;"
						>June 30th</span
					>
					to be included in our current review batch. Candidates shortlisted from this batch for the
					next round of screening will be notified by
					<span style="text-decoration: underline; color: yellow;">July 20th</span>. We accept
					applications year-round, with the next review cycle covering submissions received between
					<span style="text-decoration: underline; color: yellow;">July 1st and July 31st.</span>
					<strong>
						For any inquiries or further clarification, please email us at <a
							href="mailto:diiksha@theiksha.org"
						>
							<span style="text-decoration: underline; color: yellow;">diiksha@theiksha.org</span
							></a
						>
					</strong>
				</p>
			</div>

			<div class="apply-action">
				<a
					href="https://forms.gle/TZC8RPgnozHBVZgS7"
					target="_blank"
					rel="noopener noreferrer"
					class="apply-btn"
				>
					Apply Now →
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.apply-section {
		padding: 30px 0;
		background: linear-gradient(135deg, #2d639c, #2d639c);
		color: white;
	}

	.apply-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: center;
		gap: 50px;
	}

	.apply-content h2 {
		font-size: 3rem;
		margin: 10px 0 20px;
		color: white;
	}

	.apply-content p {
		line-height: 1.8;
		opacity: 0.95;
		margin-bottom: 15px;
	}

	.section-tag {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.8);
	}

	.apply-action {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.apply-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 18px 36px;
		background: white;
		color: #8d4b10;
		text-decoration: none;
		font-weight: 700;
		font-size: 1rem;
		border-radius: 12px;
		transition: all 0.3s ease;
		min-width: 240px;
	}

	.apply-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
	}

	@media (max-width: 768px) {
		.apply-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.apply-content h2 {
			font-size: 2rem;
		}

		.apply-action {
			margin-top: 20px;
		}
	}
	.top-bar {
		position: relative;
		min-height: 43vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-image: url('/images/bg-image.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
	}

	.top-bar h2 {
		font-size: clamp(1.5rem, 3vw, 2.8rem);
		color: white;
		margin-top: 20px;
		font-weight: 900;
		letter-spacing: 1px;
	}
	.about-section {
		padding: 40px 0;
		background: #fff;
	}

	.container {
		max-width: 1280px;
		margin: auto;
		padding: 0 24px;
	}

	.about-grid {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 60px;
		align-items: center;
	}

	.about-grid-2 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 60px;
		align-items: center;
	}

	.section-tag {
		color: #f5943a;
		font-weight: 700;
		letter-spacing: 2px;
		font-size: 0.85rem;
		margin-bottom: 16px;
	}

	h2 {
		font-size: 3rem;
		margin-bottom: 10px;
		color: #111;
		font-weight: 800;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 24px;
		color: #000000;
		font-weight: 700;
	}

	p {
		font-size: 1.05rem;
		line-height: 1.9;
		color: #000000;
		margin-bottom: 20px;
	}

	.image-wrapper {
		position: relative;
	}

	.image-wrapper img {
		width: 100%;
		border-radius: 24px;
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
		display: block;
	}

	.image-wrapper::before {
		content: '';
		position: absolute;
		inset: -15px;
		border: 2px solid #f5943a;
		border-radius: 28px;
		z-index: -1;
		opacity: 0.3;
	}

	.project-specifics {
		padding: 40px 0;
		background: #fff;
	}

	.container {
		max-width: 1200px;
		margin: auto;
		padding: 0 24px;
	}

	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.section-header span {
		color: #f5943a;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.section-header h2 {
		font-size: 3rem;
		margin-top: 12px;
		color: #111;
	}

	.accordion-item {
		border-bottom: 1px solid #e5e5e5;
	}

	.accordion-header {
		width: 100%;
		padding: 24px 0;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.25rem;
		font-weight: 600;
		text-align: left;
		color: #222;
	}

	.plus {
		font-size: 2rem;
		color: #f5943a;
		transition: 0.3s;
	}

	.plus.open {
		transform: rotate(45deg);
	}

	.accordion-content {
		padding: 0 0 24px;
		color: #000000;
		line-height: 1.8;
	}

	.accordion-content ul,
	.accordion-content ol {
		padding-left: 20px;
	}

	.accordion-content li {
		margin-bottom: 10px;
	}
	.pillars-section {
		padding: 120px 0;
		background: #faf7f2;
	}

	.container {
		max-width: 1280px;
		margin: auto;
		padding: 0 24px;
	}

	.section-header {
		text-align: center;
		margin-bottom: 70px;
	}

	.section-header span {
		color: #f5943a;
		font-weight: 700;
		letter-spacing: 2px;
		font-size: 0.85rem;
	}

	.section-header h2 {
		font-size: 3rem;
		margin: 12px 0;
	}

	.section-header p {
		max-width: 700px;
		margin: auto;
		color: #000000;
		line-height: 1.8;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 30px;
	}

	.pillar-card {
		background: white;
		border-radius: 24px;
		padding: 35px;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
		transition: 0.3s;
	}

	.pillar-card:hover {
		transform: translateY(-8px);
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 25px;
	}

	.icon {
		font-size: 2rem;
	}

	.number {
		font-size: 0.9rem;
		font-weight: 700;
		color: #f5943a;
	}

	h3 {
		margin-bottom: 20px;
		font-size: 1.4rem;
		color: #111;
	}

	.content {
		line-height: 1.8;
		color: #000000;
		font-size: 0.95rem;
	}

	.note {
		margin-top: 40px;
		background: #fff8ee;
		border-left: 4px solid #f5943a;
		padding: 20px 25px;
		line-height: 1.8;
	}
	.architecture-section {
		padding: 120px 0;
		background: #fff;
	}

	.container {
		max-width: 1280px;
		margin: auto;
		padding: 0 24px;
	}

	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.section-header span {
		color: #f5943a;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 2px;
	}

	.section-header h2 {
		font-size: 3rem;
		margin: 12px 0;
	}

	.section-header p {
		max-width: 800px;
		margin: auto;
		line-height: 1.8;
		color: #000000;
	}

	.architecture-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		margin-bottom: 60px;
	}

	.architecture-card {
		padding: 40px;
		border-radius: 24px;
		background: white;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
	}

	.fellowship {
		border-top: 5px solid #f5943a;
	}

	.grant {
		border-top: 5px solid #fa8a1f;
	}

	.badge {
		display: inline-block;
		padding: 8px 16px;
		border-radius: 100px;
		background: #fff4e8;
		color: #f5943a;
		font-size: 0.85rem;
		font-weight: 700;
		margin-bottom: 20px;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.target {
		margin-bottom: 20px;
	}

	.comparison-table {
		background: white;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th {
		background: #fa8a1f;
		color: white;
		padding: 20px;
		font-size: 1rem;
	}

	td {
		padding: 22px;
		border-bottom: 1px solid #eee;
	}

	.yes {
		text-align: center;
		font-size: 1.4rem;
		font-weight: bold;
		color: #1e8e3e;
	}

	.no {
		text-align: center;
		font-size: 1.4rem;
		color: #999;
	}

	.architecture-content {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.support-card {
		background: #faf7f2;
		padding: 24px;
		border-left: 4px solid #f5943a;
	}

	.support-card h4 {
		margin-top: 0;
		color: #111;
		font-size: 1.2rem;
	}

	.comparison-table {
		margin-top: 10px;
		overflow-x: auto;
	}

	.comparison-table table {
		width: 100%;
		border-collapse: collapse;
		background: white;
		border-radius: 12px;
		overflow: hidden;
	}

	.comparison-table th {
		background: #fa8a1f;
		color: white;
		padding: 16px;
		text-align: left;
	}

	.comparison-table td {
		padding: 16px;
		border-bottom: 1px solid #eee;
	}

	.check {
		font-size: 1.2rem;
		font-weight: bold;
		color: #198754;
		text-align: center;
	}

	@media (max-width: 768px) {
		.architecture-grid {
			grid-template-columns: 1fr;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		table {
			display: block;
			overflow-x: auto;
		}
	}

	@media (max-width: 1024px) {
		.pillars-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.pillars-grid {
			grid-template-columns: 1fr;
		}

		.section-header h2 {
			font-size: 2rem;
		}
	}

	@media (max-width: 768px) {
		.section-header h2 {
			font-size: 2rem;
		}

		.accordion-header {
			font-size: 1rem;
		}
	}

	@media (max-width: 992px) {
		.about-grid {
			grid-template-columns: 1fr;
		}
		.about-grid-2 {
			grid-template-columns: 1fr;
		}
		.image-wrapper {
			grid-row: 1;
		}

		.content {
			grid-row: 2;
		}

		h2 {
			font-size: 2.5rem;
		}

		h3 {
			font-size: 1.25rem;
		}
	}

	/* =========================================
   PROJECT SPECIFICS ACCORDION
========================================= */

	.project-specifics {
		padding: 60px 0;
		background: #fff;
	}

	.accordion-wrapper {
		max-width: 1100px;
		margin: 0 auto;
	}

	.accordion-item {
		border-bottom: 1px solid #e5e5e5;
	}

	.accordion-header {
		width: 100%;
		padding: 24px 0;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.25rem;
		font-weight: 600;
		color: #222;
		text-align: left;
		transition: all 0.3s ease;
	}

	.accordion-header:hover {
		color: #f5943a;
	}

	.plus {
		font-size: 2rem;
		color: #f5943a;
		font-weight: 300;
		transition: transform 0.3s ease;
	}

	.plus.open {
		transform: rotate(45deg);
	}

	.accordion-content {
		padding: 0 0 24px;
	}

	/* =========================================
   COMMON CARD DESIGN FOR ALL ACCORDIONS
========================================= */

	:global(.architecture-content) {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	:global(.support-card) {
		background: #faf7f2;
		padding: 28px;
		border-left: 5px solid #f5943a;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
	}

	:global(.support-card h4) {
		margin: 0 0 16px;
		font-size: 1.3rem;
		font-weight: 700;
		color: #111;
	}

	:global(.support-card p) {
		margin: 0 0 14px;
		line-height: 1.9;
		color: #555;
		font-size: 1rem;
	}

	:global(.support-card ul),
	:global(.support-card ol) {
		margin: 12px 0;
		padding-left: 24px;
	}

	:global(.support-card li) {
		margin-bottom: 10px;
		line-height: 1.8;
		color: #555;
	}

	:global(.support-card strong) {
		color: #222;
		font-weight: 600;
	}

	/* =========================================
   TABLE DESIGN
========================================= */

	:global(.comparison-table) {
		margin-top: 20px;
		overflow-x: auto;
		border-radius: 16px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
	}

	:global(.comparison-table table) {
		width: 100%;
		min-width: 650px;
		border-collapse: collapse;
		background: #fff;
	}

	:global(.comparison-table th) {
		background: #fa8a1f;
		color: white;
		padding: 18px;
		text-align: left;
		font-size: 1rem;
		font-weight: 600;
	}

	:global(.comparison-table td) {
		padding: 18px;
		border-bottom: 1px solid #ececec;
		vertical-align: middle;
	}

	:global(.comparison-table tr:last-child td) {
		border-bottom: none;
	}

	:global(.comparison-table small) {
		color: #000000;
		font-size: 0.85rem;
	}

	:global(.check) {
		color: #16a34a;
		font-size: 1.25rem;
		font-weight: 700;
		text-align: center;
	}

	/* =========================================
   SECTION HEADER
========================================= */

	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.section-header span {
		color: #f5943a;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.section-header h2 {
		font-size: 3rem;
		margin-top: 12px;
		color: #111;
	}

	.section-header p {
		max-width: 800px;
		margin: 16px auto 0;
		color: #000000;
		line-height: 1.8;
	}
	.objectives-section {
		padding: 100px 0;
		background: #faf7f2;
	}

	.objectives-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
		margin-top: 50px;
	}

	.objective-card {
		background: white;
		padding: 40px;
		border-radius: 24px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		border-top: 4px solid #f5943a;
		transition: all 0.3s ease;
	}

	.objective-card:hover {
		transform: translateY(-6px);
	}

	.objective-card .icon {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}

	.objective-card h3 {
		margin-bottom: 15px;
		font-size: 1.6rem;
		color: #111;
	}

	.objective-card p {
		line-height: 1.9;
		color: #000000;
		margin: 0;
	}

	@media (max-width: 768px) {
		.objectives-grid {
			grid-template-columns: 1fr;
		}

		.objective-card {
			padding: 24px;
		}
	}
	/* =========================================
   MOBILE
========================================= */

	@media (max-width: 992px) {
		.section-header h2 {
			font-size: 2.4rem;
		}
	}

	@media (max-width: 768px) {
		.project-specifics {
			padding: 40px 0;
		}

		.accordion-header {
			font-size: 1rem;
			padding: 18px 0;
		}

		.plus {
			font-size: 1.6rem;
		}

		:global(.support-card) {
			padding: 20px;
		}

		:global(.support-card h4) {
			font-size: 1.1rem;
		}

		.section-header h2 {
			font-size: 2rem;
		}

		:global(.comparison-table table) {
			min-width: 600px;
		}
	}
</style>
