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
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

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

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
    color: #0f0;
    font-family: 'Press Start 2P', cursive; /* Placeholder pixel font */
  }

  header {
    padding: 1rem;
    background-color: #050; /* Darker green */
    border-bottom: 2px solid #0f0;
  }

  nav {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  nav a {
    color: #0f0;
    text-decoration: none;
    font-size: 1.2rem;
  }

  nav a:hover {
    text-decoration: underline;
  }

  main {
    flex-grow: 1;
    padding: 2rem;
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
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    font-size: 2rem;
  }
</style> 