<form on:submit={handleSubmit}>
  <Input placeholder="Title" id="title" label="Title for Event" />
  <Input placeholder="Location" id="location" label="Location" />
  <Datepicker placeholder="Start Date" id="startDate" />
  <Datepicker placeholder="End Date" id="endDate" />
  <button></button>
</form>

<script>
import Input from "./Input.svelte";
import Datepicker from "./DatePicker.svelte";

function handleSubmit(event) {
  console.log(event.target);
}

</script>