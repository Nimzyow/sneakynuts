<script lang="ts">
  // import '../app.css'; // Removed this line as global styles are in app.html
  import { onNavigate } from '$app/navigation';
  import { writable } from 'svelte/store';

  let transitioning = writable(false);

  onNavigate((navigation) => {
    if (!document.startViewTransition) {
      return;
    }

    return new Promise((resolve) => {
      transitioning.set(true);
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
        transitioning.set(false);
      });
    });
  });
</script>

<div class="app-container">
  <aside class="sidebar">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <!-- Add more links as needed -->
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
      <p>&copy; 2024 Your Name Here - Retro Gaming Portfolio</p>
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
  }

  .sidebar {
    width: 200px; /* Adjust width as needed */
    background-color: #050; /* Darker green */
    padding: 1rem;
    border-right: 2px solid #0f0;
    display: flex;
    flex-direction: column;
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
  }

  .sidebar nav a:hover {
    border-color: #0f0;
    background-color: #030; /* Slightly lighter green for hover */
  }

  .main-content-area {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative; /* For positioning the transition overlay */
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
</style> 