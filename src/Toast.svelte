<script>
  import { message } from "./toastStore";
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
  <div class="toast styled-toast">{$message}</div>
{/if}
