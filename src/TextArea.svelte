<div class="form-group">
  <label class="form-label" for={id}>{label}</label>
  <textarea class="form-input" id={id} placeholder={placeholder} name={id} rows={rows}></textarea>
</div>

<script>
  export let id;
  export let placeholder;
  export let rows = 3;
  export let label;
</script>