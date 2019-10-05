<input type="text" placeholder="Start date" bind:this={input} />

<script>
  import { onMount } from 'svelte';
  import flatpickr from "flatpickr";

  let input;

  onMount(() => {
    if(input) {
      flatpickr(input, {
        enableTime: true,
      });
    }
  });

</script>