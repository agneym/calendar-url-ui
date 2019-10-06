<div>
  <label for={id}>{label}</label>
  <input placeholder={placeholder} type={type} id={id} name={id} bind:this={instance} />
</div>

<script>
export let placeholder;
export let type = "text";
export let id;
export let label;
export let instance;
</script>