<div class="form-group">
  <label for={id} class="form-label">{label}</label>
  <input
    placeholder={placeholder}
    type="text"
    id={id}
    name={id}
    bind:this={instance}
    class="form-input"
    required={required}
    bind:value={value}
  />
</div>

<script>
export let placeholder;
export let id;
export let label;
export let instance;
export let required = false;
export let value;
</script>