<form on:submit={handleSubmit}>
  <Input placeholder="Meeting for the Calendar" id="title" label="Title" required={true} bind:value={eventValues.title} />
  <Input placeholder="The Meeting place" id="location" label="Location" bind:value={eventValues.location} />
  <TextArea placeholder="What is your event about?" label="Description" id="description" bind:value={eventValues.description} />
  <Datepicker
    placeholder="Start Date"
    id="startDate"
    label="Start Date"
    required={true}
    bind:value={eventValues.startDate}
    on:input={startDateChange}
  />
  <Datepicker
    placeholder="End Date"
    id="endDate"
    label="End Date"
    required={true}
    bind:value={eventValues.endDate}
    on:input={endDateChange}
    hint={endDateError}
    error={!!endDateError}
  />

  <div class="form-group">
    <label class="form-switch">
      <input type="checkbox" id="busy" bind:checked={eventValues.busy}>
      <i class="form-icon"></i> Show as busy (Google only)
    </label>
  </div>

  <div class="btn-container">
    <button
      class="btn btn-primary button"
      type="submit"
      disabled={endDateError}
    >
      Generate Links
    </button>
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
import {isBefore} from "date-fns";
import Input from "./Input.svelte";
import Datepicker from "./DatePicker.svelte";
import TextArea from "./TextArea.svelte";

let eventValues = {
  title: "",
  location: "",
  description: "",
  startDate: "",
  endDate: "",
  busy: false
};

let endDateError = "";
const dispatch = createEventDispatcher();

function validateDates(startDate, currentEndDate) {
  if(!isBefore(new Date(startDate), new Date(currentEndDate))) {
    endDateError = "End Date has to be before start date.";
  } else {
    endDateError = "";
  }
}

function endDateChange(event) {
  const endDateEl = event.target;
  const currentEndDate = endDateEl.value;
  const startDate = eventValues.startDate;
  if(startDate) {
    validateDates(startDate, currentEndDate);
  }
}

function startDateChange(event) {
  const startDateEl = event.target;
  const currentStartDate = startDateEl.value;
  const endDate = eventValues.endDate;
  if(endDate) {
    validateDates(currentStartDate, endDate);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  dispatch("submit", eventValues);
}

</script>
