<Input
  type="text"
  placeholder={placeholder}
  id={id}
  bind:instance={input}
  label={label}
  bind:value={value} 
  required={required}
  on:input
/>

<script>
  import { onMount } from 'svelte';
  import flatpickr from "flatpickr";
  import Input from "./Input.svelte";

  export let placeholder;
  export let id;
  export let label;
  export let value;
  export let required;

  let input;

  onMount(() => {
    if(input) {
      flatpickr(input, {
        enableTime: true,
      });
    }
  });

</script>