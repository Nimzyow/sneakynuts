<svelte:head>
  <title>WDYR Project - Sneakynuts Portfolio</title>
  <meta name="description" content="Details about the WDYR (What Do You Recommend) mobile application by Sneakynuts." />
</svelte:head>

<div class="project-detail-container">
  <header class="project-header">
    <h1>WDYR - What Do You Recommend</h1>
    <p class="tagline">Maximize Your Experience with Community-Driven Insights</p>
    <a href="https://apps.apple.com/gb/app/wdyr/id6740585961" target="_blank" rel="noopener noreferrer" class="app-store-link">View on the App Store</a>
  </header>

  <section class="project-overview">
    <h2>Project Overview</h2>
    <p>
      When you choose What Do You Recommend (WDYR), you're not just browsing businesses; you're unlocking the power of community-driven insights. Our platform empowers you to discover the highest-rated recommendations, ensuring you never miss out on the best experiences.
    </p>
    <p>
      Imagine stepping into a local café or restaurant, knowing that it comes highly recommended. With WDYR, you can confidently explore recommendations that have garnered the most votes, allowing you to make informed choices that enhance your outings and never miss out on that top recommendation.
    </p>
    <p>
      Why settle for average when you can experience the best? By focusing on top recommendations, WDYR helps you pick out the top recommendations, ensuring your visits are memorable and fulfilling.
    </p>
  </section>

  <section class="key-features">
    <h2>Key Features</h2>
    <ul>
      <li><strong>Location-based discovery:</strong> Find great businesses near you with our smart distance filters. Explore helpful recommendations whether you're looking for a cozy café, a trendy restaurant, or good old pub, WDYR connects you with the best options nearby.</li>
      <li><strong>Community Engagement:</strong> Join a vibrant community of users who share their experiences and recommendations. Contribute your own insights and help others find hidden gems in your neighborhood.</li>
      <li><strong>No sign up:</strong> With just a few taps, you can explore and favourite a business and, see and add recommendations.</li>
    </ul>
  </section>

  <section class="whats-new">
    <h2>What's New (Version 1.2.0 - 4 May 2025)</h2>
    <ul>
      <li>Improved performance when navigating between pages</li>
      <li>Improved navigation flow</li>
      <li>Improve presentation of review categories to fix category names being broken up into multiple lines</li>
      <li>Fix category filter</li>
      <li>Fix camera bug</li>
      <li>Minor styling updates</li>
    </ul>
  </section>

  <section class="app-info">
      <h2>App Information</h2>
      <p><strong>Provider:</strong> Nima GOLZAR-SOUFIANI</p>
      <p><strong>Authors:</strong> Nima Golzar-Soufiani, Jake Coe</p>
      <p><strong>Category:</strong> Lifestyle</p>
      <p><strong>Compatibility:</strong> Requires iOS 15.1 or later (iPhone, iPod touch), macOS 12.0 or later (Apple M1 chip or later), visionOS 1.0 or later.</p>
      <p><strong>Price:</strong> Free (Offers In-App Purchases)</p>
  </section>

  <!-- Consider adding a section for iPhone screenshots here -->
  <!-- <section class="screenshots">
    <h2>Screenshots</h2>
    <div class="image-gallery">
      <img src="/path/to/screenshot1.png" alt="WDYR Screenshot 1">
      <img src="/path/to/screenshot2.png" alt="WDYR Screenshot 2">
    </div>
  </section> -->

</div>

<style>
  .project-detail-container {
    padding: 1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .project-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid #050; /* Darker green border */
  }

  .project-header h1 {
    font-size: 2.8rem;
    color: #0f0;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px #030;
  }

  .tagline {
    font-size: 1.3rem;
    color: #0c0; /* Lighter green */
    margin-bottom: 1rem;
  }

  .app-store-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: #0f0;
    color: #000;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid #0f0;
    border-radius: 5px; /* Slight rounding */
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .app-store-link:hover {
    background-color: #000;
    color: #0f0;
    border-color: #0f0;
  }

  section {
    margin-bottom: 2.5rem;
    background-color: #010101; /* Very very dark green, almost black */
    padding: 1.5rem;
    border: 1px solid #030;
  }

  h2 {
    font-size: 2rem;
    color: #0f0;
    margin-bottom: 1rem;
    border-bottom: 1px dashed #050;
    padding-bottom: 0.5rem;
  }

  p, li {
    font-size: 1rem;
    line-height: 1.7;
    color: #0c0; /* Lighter green for readability */
  }

  ul {
    list-style-position: inside;
    padding-left: 0.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #0f0; /* Brighter green for emphasis */
  }

  .app-info p {
     margin-bottom: 0.3rem;
  }

  /* Styles for optional screenshot gallery */
  /* .screenshots .image-gallery {
    display: flex;
    gap: 1rem;
    overflow-x: auto; 
  }
  .screenshots img {
    max-height: 400px;
    border: 2px solid #0f0;
  } */
</style> 