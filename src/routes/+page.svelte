<script lang="ts">
  // Your existing script content here, if any. For example:
  // export let data;
  // $: ({ greeting } = data);
</script>

<svelte:head>
  <title>Home - Retro Portfolio</title>
</svelte:head>

<div class="home-container">
  <h1>Welcome to My Retro Portfolio!</h1>
  
  <section class="projects-grid">
    <div class="project-card">
      <h2>Project Alpha</h2>
      <p>A brief description of Project Alpha. This project was awesome because...</p>
      <a href="/project-alpha" class="project-link">View Project &gt;</a>
    </div>
    <div class="project-card">
      <h2>Project Beta</h2>
      <p>A brief description of Project Beta. This project challenged me by...</p>
      <a href="/project-beta" class="project-link">View Project &gt;</a>
    </div>
    <div class="project-card">
      <h2>Project Gamma</h2>
      <p>A brief description of Project Gamma. I learned a lot about X, Y, and Z.</p>
      <a href="/project-gamma" class="project-link">View Project &gt;</a>
    </div>
  </section>
</div>

<style>
  h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Comic Sans MS", "Comic Sans", "Chalkboard SE", "Comic Neue", sans-serif;
    font-style: normal;
    margin-bottom: 2rem;
    text-shadow: 2px 2px #050; /* Darker green shadow */
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
  }

  .project-card h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .project-card p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .project-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #0f0;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #0f0;
  }

  .project-link:hover {
    background-color: #000;
    color: #0f0;
  }
</style>
