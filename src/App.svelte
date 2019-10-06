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
import { google, outlook, yahoo, ics } from "calendar-link";

let eventUrls;

function handleSubmit({ detail: event }) {
  eventUrls = {
    google: google(event),
    yahoo: yahoo(event),
    outlook: outlook(event),
    ics: ics(event),
  }
} 
</script>