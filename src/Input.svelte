<div class="form-group" class:has-success={success} class:has-error={error}>
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
    on:input
  />
  {#if hint}
    <p class="form-input-hint">{hint}</p>
  {/if}
</div>

<script>
export let placeholder;
export let id;
export let label;
export let instance;
export let required = false;
export let value;
export let hint;
export let success = false;
export let error = false;
</script>