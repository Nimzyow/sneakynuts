<svelte:head>
  <title>About Us - Sneakynuts</title>
</svelte:head>

<div class="about-container">
  <h1>About Us</h1>
  
  <section class="intro">
    <p>
      We are passionate developers and engineers 
      looking to make an impact on the world! We love games, especially 
      first-person shooters and all sorts of other genres.
    </p>
  </section>

  <section class="experience">
    <h2>Our Background</h2>
    <p>
      We've worked in a wide number of full-stack engineering roles and 
      Linux administrator roles. With our combined experience and a shared vision, 
      we aim to create something fun and engaging for the world.
    </p>
  </section>

  <section class="connect">
    <h2>Connect With Us</h2>
    <div class="profiles">
      <div class="profile">
        <h3>Forever in Transit</h3>
        <a href="https://x.com/forevintransit" target="_blank" rel="noopener noreferrer">Twitter Profile</a>
      </div>
      <div class="profile">
        <h3>Jake Coe</h3>
        <a href="https://x.com/Jakecoe" target="_blank" rel="noopener noreferrer">Twitter Profile</a>
      </div>
    </div>
  </section>

</div>

<style>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem; /* Add some padding for smaller screens */
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: 2px 2px #050; /* Darker green shadow */
  }

  .intro p, .experience p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    text-align: justify; /* Justify text for a cleaner look */
  }

  .experience h2, .connect h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1.5rem; /* Increased bottom margin */
    text-align: center;
  }

  .connect .profiles {
    display: flex;
    flex-direction: column; /* Stack profiles vertically on small screens */
    gap: 2rem; /* Space between profile cards */
    align-items: center; /* Center cards */
  }

  .connect .profile {
    background-color: #020; /* Very dark green */
    padding: 1.5rem;
    border: 2px solid #0f0;
    text-align: center;
    width: 100%; /* Make cards take full width initially */
    max-width: 350px; /* Max width for each card */
  }

  .connect .profile h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #0f0;
  }

  .connect .profile a {
    color: #0f0;
    text-decoration: underline;
    font-size: 1.1rem;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px dashed #0f0;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .connect .profile a:hover {
    background-color: #0f0;
    color: #000;
    text-decoration: none;
  }

  /* Responsive adjustments for profile layout */
  @media (min-width: 600px) {
    .connect .profiles {
      flex-direction: row; /* Profiles side-by-side on larger screens */
      justify-content: space-around; /* Distribute space */
    }
    .connect .profile {
      width: 45%; /* Adjust width for side-by-side layout */
    }
  }

</style> 