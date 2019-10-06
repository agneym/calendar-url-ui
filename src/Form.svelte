<form on:submit={handleSubmit}>
  <Input placeholder="Title" id="title" label="Title for Event" />
  <Input placeholder="Location" id="location" label="Location" />
  <Datepicker placeholder="Start Date" id="startDate" label="Start Date" />
  <Datepicker placeholder="End Date" id="endDate" label="End Date" />
  <button>Generate Calendar Links</button>
</form>

<script>
import { createEventDispatcher } from "svelte";
import Input from "./Input.svelte";
import Datepicker from "./DatePicker.svelte";

let eventValues;

const dispatch = createEventDispatcher();

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
}

</script>