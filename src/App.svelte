<header class="header">
  <h1>Calendar Link Generator</h1>
</header>
<main class="main-content">
  <Form on:submit={handleSubmit} />
  {#if !!eventUrls}
    <Result urls={eventUrls} />
  {/if}
</main>
<footer>

</footer>

<style>
  :global(body) {
    margin: 0;
  }
  .header {
    text-align: center;
    margin: 5rem 0 3rem;
  }
  .main-content {
    max-width: 600px;
    margin: 0 auto;
  }
</style>

<script>
import Form from "./Form.svelte";
import Result from "./Result.svelte";
import "flatpickr/dist/flatpickr.min.css";
import { google, outlook, yahoo, ics } from "calendar-link";

let eventUrls = null;

function handleSubmit({ detail: event }) {
  eventUrls = [
    google(event),
    yahoo(event),
    outlook(event),
    ics(event),
  ];
} 
</script>