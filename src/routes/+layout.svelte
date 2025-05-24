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
      <div class="page-transition">
        <!-- Add your retro animation here -->
        <p>Loading...</p>
      </div>
    {/if}

    <main>
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
  }
  
  main {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto; /* Allow scrolling for main content if it overflows */
  }

  footer {
    padding: 1rem;
    text-align: center;
    background-color: #050; /* Darker green */
    border-top: 2px solid #0f0;
  }

  .page-transition {
    position: fixed;
    top: 0;
    left: 0; /* Adjust if sidebar is fixed and transition should not cover it */
    width: 100%; /* Or calc(100% - sidebar_width) if sidebar is fixed */
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    font-size: 2rem;
  }
</style> 