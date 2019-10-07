<form on:submit={handleSubmit}>
  <Input placeholder="Meeting for the Calendar" id="title" label="Title" />
  <Input placeholder="The Meeting place" id="location" label="Location" />
  <Datepicker placeholder="Start Date" id="startDate" label="Start Date" />
  <Datepicker placeholder="End Date" id="endDate" label="End Date" />
  <button>Generate Calendar Links</button>
</form>

<script>
import { createEventDispatcher } from "svelte";
import Input from "./Input.svelte";
import Datepicker from "./DatePicker.svelte";;

const dispatch = createEventDispatcher();

function handleSubmit(event) {
  event.preventDefault();
  const target = event.target;
  const { title, location, startDate, endDate } = target;
  const eventValues = {
    title: title.value,
    location: location.value,
    start: startDate.value,
    end: endDate.value,
  }
  dispatch("submit", eventValues);
}

</script>