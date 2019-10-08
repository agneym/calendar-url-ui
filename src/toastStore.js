import { writable } from "svelte/store";

function createToastMessage() {
  const { subscribe, set } = writable("");

  return {
    subscribe,
    set: message => set(message)
  };
}

export const message = createToastMessage();
