<script>
  import { message } from "./toastStore";
  import { fade, fly } from 'svelte/transition';
</script>

<style>
  .styled-toast {
    position: fixed;
    top: 1rem;
    right: 0;
    width: auto;
  }
</style>

{#if $message}
  <div class="toast styled-toast" in:fly={{ x: 100, duration: 400 }} out:fade>{$message}</div>
{/if}
