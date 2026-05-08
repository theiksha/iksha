<script lang="ts">

  import { mobileBar, toggleMobilebar, mediaClass } from "$lib/utils/globalstores";
  import Menu from '$lib/icons/menu.svelte'
  import Close from '$lib/icons/close.svelte'

  function handleClose(){
    if ($mediaClass !== 'wide' && $mobileBar) {
      toggleMobilebar()
    }
  }

</script>

<div class="row ycenter xbetween outer padded">

  <a class="row ycenter logo blanker" href="/">
    <img class="logo" src="/images/iksha.png" alt="iksha logo"/>
  </a>

  <div class="row ycenter">
    {#if $mediaClass === 'wide' || $mobileBar}
    <nav class="row ycenter cgap16 mcol mright" on:click={handleClose} on:keydown={handleClose}>
  <p class="small"><a class="blanker" href="/">HOME</a></p>
  <p class="small"><a class="blanker" href="/about">ABOUT</a></p>
  <p class="small"><a class="blanker" href="/diiksha">DIIKSHA</a></p>
  <p class="small"><a class="blanker" href="/opportunities">OPPORTUNITIES</a></p>

  <!-- ===== CONFERENCE Dropdown ===== -->
  <div class="dropdown">
    <p class="small dropdown-title">
      <a class="blanker" href="/conference/">CONFERENCE</a>
    </p>
    <ul class="dropdown-menu">
      <li><a class="blanker" href="/conference/">AAC 2026</a></li>

      <!-- ===== AAC 2025 Nested Dropdown ===== -->
      <li class="dropdown-sub">
  <a class="blanker" href="/conference/aac2025">AAC 2025</a>
  <ul class="dropdown-submenu">
    <li><a class="blanker" href="/conference/aac2025/about.html">About</a></li>
    <li><a class="blanker" href="/conference/aac2025/papersubmission.html">Paper Submission</a></li>
    <li><a class="blanker" href="/conference/aac2025/schedule.html">Schedule</a></li>
    <li><a class="blanker" href="/Documents/AAC_on_IKS_Brochure_2025.pdf">Brochure</a></li>
  </ul>
</li>
    </ul>
  </div>

  <!-- ===== SAṄGAMA Dropdown ===== -->
  <div class="dropdown">
    <p class="small dropdown-title">
      <a class="blanker" href="/sangama/">SAṄGAMA</a>
    </p>
    <ul class="dropdown-menu">
      <li><a class="blanker" href="/sangama/overview">Overview</a></li>
      <li><a class="blanker" href="/Documents/Sangama_2023.pdf">Sangama 2023</a></li>
      <li><a class="blanker" href="/events/iksha-sangama-2024">Sangama 2024</a></li>
    </ul>
  </div>

  <p class="small"><a class="blanker" href="/journal">JOURNAL</a></p>
  <p class="small"><a class="blanker" href="/events">IKS NEWS AND EVENTS</a></p>
  <p class="small"><a class="blanker" href="/contact">CONTACT</a></p>
</nav>

    {/if}
    {#if $mediaClass !== 'wide'}
      <button class="blanker" on:click={toggleMobilebar}>
        {#if $mobileBar}
        <Close/>
        {:else}
        <Menu/>
        {/if}
      </button>
    {/if}
  </div>

</div>

<style lang="sass">

img.logo
  object-fit: contain
  height: 32px

.outer
  height: 100%

nav
  @media screen and (max-width: 1024px)
    height: calc(100vh - 80px)
    position: fixed
    top: 80px
    right: 0
    background: #FFFFFF
    width: 100%
    z-index: 90
    text-align: right
    padding-top: 48px
    padding-right: 16px
    align-items: flex-end
    row-gap: 16px
    p.small
      font-size: 27px


/* === Nested Dropdown Styles === */

.dropdown-menu
  li
    font-size: 15px

    a
      display: block
      padding: 0px 10px
      color: #000
      text-decoration: none
      transition: color 0.3s ease

      &:hover
        color: #f5943d
.dropdown-sub
  position: relative  // Needed to position submenu

  > a::after
    
    font-size: 12px
    color: #000

  &:hover > a::after
    

  &:hover > .dropdown-submenu
    display: block

.dropdown-submenu
  display: none  // Hidden by default
  position: absolute
  top: 0
  left: 100%    // Positions submenu to the right of parent
  background: white
  list-style: none
  margin: 0
  padding: 0
  min-width: 180px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  z-index: 1000

  li
    a
      display: block
      padding: 0px 10px
      color: #000
      text-decoration: none
</style>