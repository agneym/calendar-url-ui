<input type="text" placeholder={placeholder} bind:this={input} name={id} />

<script>
  import { onMount } from 'svelte';
  import flatpickr from "flatpickr";

  export let placeholder;
  export let id;
  
  let input;

  onMount(() => {
    if(input) {
      flatpickr(input, {
        enableTime: true,
      });
    }
  });

</script>