<script>
  let greeting = 'sneakynuts';
</script>

<main>
  <div class="content">
    <h1>{greeting}</h1>
    <img src="/images/sneakynuts.png" alt="description" class="custom-image" />
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1a1a1a;
    margin: 0;
    padding: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  h1 {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: "Comic Sans MS", "Comic Sans", cursive;
    margin-bottom: 0;
  }

  .custom-image {
    width: 200px;
    height: auto;
    margin: 0;
  }
</style>
