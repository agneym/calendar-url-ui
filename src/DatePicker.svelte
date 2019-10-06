<input type="text" placeholder={placeholder} bind:this={input} />

<script>
  import { onMount } from 'svelte';
  import flatpickr from "flatpickr";

  export let placeholder;

  let input;

  onMount(() => {
    if(input) {
      flatpickr(input, {
        enableTime: true,
      });
    }
  });

</script>