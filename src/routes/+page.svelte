<script lang="ts">
  // Your existing script content here, if any. For example:
  // export let data;
  // $: ({ greeting } = data);
</script>

<svelte:head>
  <title>Home - Sneakynuts Portfolio</title>
</svelte:head>

<div class="home-container">
  <h1>Welcome to the Sneakynuts Portfolio!</h1>
  <p class="intro-text">Showcasing projects by Nima Soufiani & Jake Coe.</p>
  
  <section class="projects-grid">
    <div class="project-card">
      <h2>WDYR - What Do You Recommend</h2>
      <p>A community-driven platform to discover the highest-rated local businesses and experiences. Never miss out on the best!</p>
      <a href="/projects/wdyr" class="project-link">View Project Details &gt;</a>
    </div>
    <div class="project-card">
      <h2>Project Beta (Placeholder)</h2>
      <p>A brief description of Project Beta. This project challenged me by...</p>
      <a href="/projects/beta" class="project-link">View Project Details &gt;</a>
    </div>
    <div class="project-card">
      <h2>Project Gamma (Placeholder)</h2>
      <p>A brief description of Project Gamma. I learned a lot about X, Y, and Z.</p>
      <a href="/projects/gamma" class="project-link">View Project Details &gt;</a>
    </div>
  </section>
</div>

<style>
  h1 {
    color: #ffffff;
    font-size: 2.5rem; /* Reduced slightly */
    font-weight: bold;
    /* The global font 'Press Start 2P' will apply, removing specific Comic Sans here */
    font-style: normal;
    margin-bottom: 0.5rem; /* Adjusted margin */
    text-shadow: 2px 2px #050; /* Darker green shadow */
  }

  .intro-text {
    font-size: 1.1rem;
    color: #0c0; /* Lighter green */
    margin-bottom: 2.5rem;
  }

  .home-container {
    text-align: center;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: #020; /* Very dark green */
    padding: 1.5rem;
    border: 2px solid #0f0;
    box-shadow: 4px 4px #050; /* Darker green shadow */
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-card h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #0f0;
  }

  .project-card p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem; /* Increased margin */
    color: #0c0; /* Lighter green */
    flex-grow: 1;
  }

  .project-link {
    display: inline-block;
    padding: 0.7rem 1.2rem; /* Slightly larger padding */
    background-color: #0f0;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #0f0;
    align-self: flex-start; /* Align button to the start of the flex container */
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .project-link:hover {
    background-color: #000;
    color: #0f0;
  }
</style>
