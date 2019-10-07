<div class="form-group">
  <label for={id} class="form-label">{label}</label>
  <input
    placeholder={placeholder}
    type={type}
    id={id}
    name={id}
    bind:this={instance}
    class="form-input"
    required={required}
  />
</div>

<script>
export let placeholder;
export let type = "text";
export let id;
export let label;
export let instance;
export let required = false;
</script>