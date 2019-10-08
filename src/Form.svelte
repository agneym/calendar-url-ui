<form on:submit={handleSubmit}>
  <Input placeholder="Meeting for the Calendar" id="title" label="Title" required={true} bind:value={eventValues.title} />
  <Input placeholder="The Meeting place" id="location" label="Location" bind:value={eventValues.location} />
  <TextArea placeholder="What is your event about?" label="Description" id="description" bind:value={eventValues.description} />
  <Datepicker placeholder="Start Date" id="startDate" label="Start Date" required={true} bind:value={eventValues.startDate} />
  <Datepicker placeholder="End Date" id="endDate" label="End Date" required={true} bind:value={eventValues.endDate} />
  <div class="btn-container">
    <button class="btn btn-primary button" type="submit">Generate Links</button>
    <button class="btn button" type="reset">Reset</button>
  </div>
</form>

<style>
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .button {
    margin: 0 0.5rem;
  }
</style>

<script>
import { createEventDispatcher } from "svelte";
import Input from "./Input.svelte";
import Datepicker from "./DatePicker.svelte";
import TextArea from "./TextArea.svelte";

let eventValues = {
  title: "",
  location: "",
  description: "",
  startDate: "",
  endDate: "",
};

const dispatch = createEventDispatcher();

function handleSubmit(event) {
  event.preventDefault();
  dispatch("submit", eventValues);
}

</script>