<svelte:head>
  <title>About Me - Retro Portfolio</title>
</svelte:head>

<div class="about-container">
  <h1>About Me</h1>
  
  <section class="bio">
    <p>
      Hello! I'm a seasoned Software Engineer with a passion for creating innovative 
      and efficient solutions. I have many years of experience in the field, 
      working on a variety of projects and technologies.
    </p>
    <p>
      My journey in software development has been driven by a love for problem-solving
      and a constant desire to learn. I thrive in collaborative environments and enjoy 
      tackling complex challenges.
    </p>
    <p>
      When I'm not coding, I enjoy exploring the world of retro gaming, which heavily 
      inspires my design aesthetic. I'm also a big fan of pixel art!
    </p>
  </section>

  <section class="skills">
    <h2>Skills</h2>
    <ul>
      <li>Languages: JavaScript, TypeScript, Python, Java, C#</li>
      <li>Frameworks: Svelte, React, Angular, Node.js, Django</li>
      <li>Tools: Git, Docker, Kubernetes, AWS</li>
      <li>Databases: PostgreSQL, MongoDB, Redis</li>
    </ul>
  </section>
</div>

<style>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: 2px 2px #050; /* Darker green shadow */
  }

  .bio p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .skills h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .skills ul {
    list-style-type: none; /* Or use a pixelated bullet */
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .skills li {
    background-color: #020; /* Very dark green */
    padding: 0.5rem 1rem;
    border: 1px solid #0f0;
    font-size: 1rem;
  }
</style> 