<script lang="ts">
  import { onMount } from 'svelte'
  import { allEvents } from '$lib/utils/localpulls'

  let events: any = [];
  let latest: any = null;

  function getEventTimestamp(item: any) {
    const candidates = [
      item?.date,
      item?.meta?.date,
      item?.timestamp,
      item?.meta?.timestamp,
      item?.isoDate,
      item?.formattedDate
    ]

    for (const c of candidates) {
      if (!c) continue
      if (typeof c === 'number') return c
      if (c instanceof Date) return c.getTime()
      const parsed = Date.parse(String(c))
      if (!Number.isNaN(parsed)) return parsed
    }

    return 0
  }

  onMount(() => {
    (async () => {
      events = await allEvents();
      events = [...events];
      events.sort((a: any, b: any) => getEventTimestamp(b) - getEventTimestamp(a))
      latest = events.length > 0 ? events[0] : null
    })()
  })


  $: if (events && events.length) latest = events[0]
</script>

<style>
  .container100vh { min-height: 100vh; }
  .latest-wrapper {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 24px;
    align-items: normal;
    margin-bottom: 32px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
  }

  .latest-image {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    max-height: 420px;
  }

  .latest-content h2 { margin: 0 0 8px 0; }
  .latest-content p { margin: 0 0 12px 0; }

  .older-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .older-card {
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .older-card img { width: 100%; height: 160px; object-fit: cover; border-radius: 6px; }

  .hero-banner {
    width: 100%;
    margin-top: 80px;
    height: 280px;            
    background-image: url('https://theiksha.org/diiksha/img/bg-image.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;      
  }

  .overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
  }


  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;            
    color: white;
    padding: 20px;
  }

  .hero-content h1 {
    font-size: 3rem;
    margin: 0;
    letter-spacing: 2px;
    font-weight: 700;
  }

  .hero-content p {
    margin-top: 10px;
    font-size: 1.2rem;
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    .hero-banner {
      height: 260px;
    }
    .hero-content h1 {
      font-size: 2.2rem;
    }
    .hero-content p {
      font-size: 1rem;
    }
  }

  @media (max-width: 900px) {
    .latest-wrapper { grid-template-columns: 1fr; }
    .older-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 600px) {
    .older-grid { grid-template-columns: 1fr; }
  }

  .button-row { display: flex; gap: 8px; align-items: center; }
  button { padding: 10px 14px; border-radius: 6px; border: none; cursor: pointer; }
</style>


<section class="hero-banner">
  <div class="overlay"></div>

  <div class="hero-content">
    <h1>IKS NEWS AND EVENTS</h1>
  </div>
</section>


<div class="padded column container100vh withfooter ytop istop rgap16">
  {#if latest}
    <section class="latest-wrapper">
      <div>
        {#if latest.meta?.image}
          <a href={latest.meta.image} target="_blank"> <img src={latest.meta.image} alt={latest.meta.title} class="latest-image" /></a>
        {:else}
          <div style="background:#f2f2f2; height: 100%; min-height: 220px; display:flex;align-items:center;justify-content:center;border-radius:8px;">
            <span class="greyed">No image</span>
          </div>
        {/if}
      </div>

      <div class="latest-content">
        <p class="small bold">{latest.formattedDate ?? latest.meta?.date ?? ''}</p>
        <h2>{latest.meta?.title}</h2>
        <p class="greyed">{latest.meta?.description}</p>
        

        <div class="button-row">
          {#if latest.meta?.google_form_link}
            <a href={latest.meta.google_form_link} target="_blank" rel="noreferrer"><button>Register Here</button></a>
          {/if}

          {#if latest.meta?.link}
            <a href={latest.meta.link} target="_blank" rel="noreferrer"><button>Download Brochure</button></a>
          {/if}
        </div>
      </div>
    </section>
    

    {#if events.length > 1}
      <section>
        <div class="older-grid">
          {#each events.slice(1) as item}
            <div class="older-card">
              {#if item.meta?.image}
                <img src={item.meta.image} alt={item.meta.title} />
              {/if}

              <div>
                <h5 style="margin:0">{item.meta?.title}</h5>
                <p class="greyed" style="margin:4px 0">{item.meta?.description}</p>
                <p class="small bold">{item.formattedDate ?? item.meta?.date ?? ''}</p>
              </div>

              <div style="margin-top:auto; display:flex; gap:8px;">
                {#if item.meta?.google_form_link}
                  <a href={item.meta.google_form_link} target="_blank" rel="noreferrer"><button>Register</button></a>
                {/if}

                {#if item.meta?.link}
                  <a href={item.meta.link} target="_blank" rel="noreferrer">Read More</a>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  {:else}
    <p>No events available.</p>
  {/if}
</div>
