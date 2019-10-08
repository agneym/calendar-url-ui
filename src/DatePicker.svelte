<Input type="text" placeholder={placeholder} id={id} bind:instance={input} label={label} bind:value={value} />

<script>
  import { onMount } from 'svelte';
  import flatpickr from "flatpickr";
  import Input from "./Input.svelte";

  export let placeholder;
  export let id;
  export let label;
  export let value;

  let input;

  onMount(() => {
    if(input) {
      flatpickr(input, {
        enableTime: true,
      });
    }
  });

</script>