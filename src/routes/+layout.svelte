<script lang="ts">
  // import '../app.css'; // Removed this line as global styles are in app.html
  import { onNavigate, beforeNavigate } from '$app/navigation';
  import { page } from '$app/stores'; // Import the page store
  import { writable } from 'svelte/store';
  import { onMount, onDestroy } from 'svelte'; // Import lifecycle functions

  let transitioning = writable(false);
  let sidebarVisible = writable(false); // State for sidebar visibility
  let sidebarElement: HTMLElement; // To bind to the aside element

  beforeNavigate(({ to, cancel, type }) => {
    // If trying to navigate to the same page via a link click, cancel it.
    if (type === 'link' && to?.route.id === $page.route.id) {
      cancel();
    }
  });

  onNavigate((navigation) => {
    if (!document.startViewTransition) {
      return;
    }
    
    // Only run transitions for 'link' and 'popstate' (browser back/forward) navigations
    // And not if we're already on the target page (though beforeNavigate should catch link clicks)
    if ((navigation.type === 'link' || navigation.type === 'popstate') && 
        !(navigation.to?.route.id === $page.route.id && navigation.type === 'link') ) {
      return new Promise((resolve) => {
        transitioning.set(true);
        document.startViewTransition(async () => {
          resolve();
          await navigation.complete;
          transitioning.set(false);
        });
      });
    }
  });

  function handleClickOutside(event: MouseEvent) {
    if (sidebarElement && !sidebarElement.contains(event.target as Node) && $sidebarVisible) {
      // Also check if the click was on the hamburger button itself
      // This requires getting a reference to the hamburger button or checking its class
      const targetElement = event.target as HTMLElement;
      if (!targetElement.closest('.hamburger')) {
        sidebarVisible.set(false);
      }
    }
  }

  onMount(() => {
    // Listener is added/removed reactively below based on sidebarVisible
    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  });

  // Reactive statement to add/remove event listener
  $: {
    if (typeof window !== 'undefined') { // Ensure code runs only in browser
      if ($sidebarVisible) {
        window.addEventListener('click', handleClickOutside, true); // Use capture phase
      } else {
        window.removeEventListener('click', handleClickOutside, true);
      }
    }
  }
</script>

<header class="top-navbar">
  <button 
    class="hamburger" 
    class:open={$sidebarVisible} 
    on:click={() => sidebarVisible.update(v => !v)}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div class="site-title">Sneakynuts</div>
</header>

<div class="app-container">
  <aside class="sidebar" class:visible={$sidebarVisible} bind:this={sidebarElement} style="view-transition-name: sidebar-area;">
    <nav>
      <a href="/" class:active={$page.url.pathname === '/'}>Home</a>
      <a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
      <!-- Add more links as needed, using the same class:active pattern -->
    </nav>
  </aside>

  <div class="main-content-area">
    {#if $transitioning}
      <div class="page-transition-overlay">
        <p>Loading...</p>
      </div>
    {/if}

    <main style="view-transition-name: main-content-slot;">
      <slot />
    </main>

    <footer>
      <p>&copy; 2025 Sneakynuts - Nima Soufiani & Jake Coe</p>
    </footer>
  </div>
</div>

<style>
  .app-container {
    display: flex; /* Changed from column to row for sidebar layout */
    min-height: 100vh;
    background-color: #000;
    color: #0f0;
    font-family: 'Press Start 2P', cursive;
    margin-top: 50px; /* Account for fixed top-navbar height */
  }

  .sidebar {
    width: 200px; /* Adjust width as needed */
    background-color: #050; /* Darker green */
    padding: 1rem;
    border-right: 2px solid #0f0;
    display: flex;
    flex-direction: column;
    /* For Desktop view, ensure it also respects the top navbar */
    position: sticky; /* Or fixed, depending on desired scroll behavior with main content */
    top: 50px; /* Height of the top-navbar */
    height: calc(100vh - 50px); /* Adjust height to fill below top-navbar */
    overflow-y: auto; /* Allow sidebar to scroll if its content is too long */
  }

  .sidebar nav {
    display: flex;
    flex-direction: column; /* Stack links vertically */
    gap: 1rem;
  }

  .sidebar nav a {
    color: #0f0;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    border: 1px dashed transparent; /* For hover effect */
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Added transition */
  }

  .sidebar nav a:hover {
    border-color: #0f0;
    background-color: #030; /* Slightly lighter green for hover */
  }

  .sidebar nav a.active {
    background-color: #0f0; /* Bright green background */
    color: #000; /* Black text */
    border: 2px solid #0f0; /* Solid green border, makes it look like it expands a bit */
    /* Padding remains 0.5rem, but border makes it appear larger */
  }

  .main-content-area {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative; /* For positioning the transition overlay */
    width: 100%; /* Ensure it takes full available width */
    overflow-x: hidden; /* Prevent its own horizontal scroll */
  }
  
  main {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto; /* Allow scrolling for main content if it overflows */
    /* view-transition-name is now an inline style */
  }

  footer {
    padding: 1rem;
    text-align: center;
    background-color: #050; /* Darker green */
    border-top: 2px solid #0f0;
  }

  .page-transition-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.85); /* Semi-transparent black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000; /* Ensure it's on top */
    font-size: 1.5rem; /* Adjusted size */
    color: #0f0;
  }

  /* Specific transition animations for the main content slot */
  :global(::view-transition-old(main-content-slot)),
  :global(::view-transition-new(main-content-slot)) {
    animation-duration: 0.35s;
    animation-timing-function: ease-in-out;
  }

  :global(::view-transition-old(main-content-slot)) {
    animation-name: fadeOutSlot;
  }
  :global(::view-transition-new(main-content-slot)) {
    animation-name: fadeInSlot;
  }

  @keyframes fadeInSlot {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeOutSlot {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-15px); }
  }

  /* NEW: Top Navbar Styles */
  .top-navbar {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px; /* Define navbar height */
    background-color: #030; /* Example: slightly different green */
    border-bottom: 2px solid #0f0;
    z-index: 1005; /* Ensure it's above other content like sidebar */
    color: #0f0;
  }

  .site-title {
    font-size: 1.2rem; /* Adjust as needed */
    margin-left: 1rem; /* Space from hamburger */
    font-weight: bold;
  }

  /* Hamburger Menu Styles Adjustments */
  .hamburger {
    display: none; /* Hidden by default (on larger screens, shown via media query) */
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem; /* Adjusted padding */
    /* Removed position:fixed, top, left, z-index as it's now in flow of top-navbar */
  }

  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #0f0;
    margin: 5px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .sidebar {
      position: fixed; /* Overrides sticky/fixed from desktop for slide-in behavior */
      top: 50px; /* Start below the fixed top-navbar */
      left: -250px; /* Hidden off-screen */
      /* bottom: 0; is implicitly handled by height */
      height: calc(100vh - 50px); /* Fill remaining height */
      width: 250px; /* A bit wider for touch targets */
      z-index: 1000;
      transition: left 0.3s ease-in-out;
      overflow-y: auto; /* Already present, but good to confirm */
      box-sizing: border-box; /* Ensure padding and border are within the width */
      /* No need to repeat background, border-right etc. if they are the same as desktop */
    }

    .sidebar.visible {
      left: 0; /* Slide in */
      z-index: 10001; /* Ensure it's above the page transition overlay */
    }

    .hamburger {
      display: block; /* Show hamburger on small screens */
    }

    .main-content-area {
      /* Adjust padding or margin if needed when sidebar is hidden/shown */
      /* For example, ensure hamburger doesn't overlap content if it's not fixed */
      width: 100%; /* Ensure it takes full available width */
      overflow-x: hidden; /* Prevent its own horizontal scroll */
    }

    main {
      padding: 1rem; /* Reduce padding on smaller screens */
      /* width: 100%; already implied by flex-grow and parent settings */
      /* overflow-x: hidden; applied to main-content-area should suffice, 
         but can be added here if specific main content still overflows. */
    }
  }
</style> 