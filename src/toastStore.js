import { writable } from "svelte/store";

const interval = 1500;

function createToastMessage() {
  const { subscribe, set } = writable("");

  function setMessage(message) {
    set(message);
    setTimeout(() => {
      set("");
    }, interval);
  }

  return {
    subscribe,
    set: setMessage
  };
}

export const message = createToastMessage();
