<form on:submit={handleSubmit}>
  <Input placeholder="Meeting for the Calendar" id="title" label="Title" required={true} />
  <Input placeholder="The Meeting place" id="location" label="Location" />
  <Datepicker placeholder="Start Date" id="startDate" label="Start Date" required={true} />
  <Datepicker placeholder="End Date" id="endDate" label="End Date" required={true} />
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