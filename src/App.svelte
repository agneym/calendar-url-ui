<header>
  <h1>Calendar Link Generator</h1>
</header>
<main>
  <Form on:submit={handleSubmit} />
</main>
<footer>

</footer>

<style>
  :global(body) {
    font-family: 'Lato', sans-serif;
  }
</style>

<script>
import Form from "./Form.svelte";
import "flatpickr/dist/flatpickr.min.css";

function handleSubmit({ detail: values }) {
  console.log(values);
} 
</script>