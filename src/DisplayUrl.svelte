<script>
  import { message } from "./toastStore.js";
  export let url;

  let inputInstance;

  function copyUrl() {
    if (inputInstance) {
      inputInstance.select();
      document.execCommand("copy");
      message.set("Copied to clipboard");
    }
  }
</script>

<style>
  .url-container {
    width: 100%;
    display: flex;
    cursor: pointer;
  }
  .text {
    flex: 1;
    overflow-x: auto;
    margin: 0;
    white-space: nowrap;
    border-right: 0;
    padding: 0 0.5rem;
    box-shadow: unset;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
  }
  .text::-webkit-scrollbar {
    height: 0.2rem;
    background-color: #f5f5f5;
  }
  .text::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #5755d9;
  }

  .text::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  .copy-btn {
    height: 45px;
  }
</style>

<div class="url-container" on:click={copyUrl}>
  <input class="text" value={url} readonly bind:this={inputInstance} />
  <button aria-label="Copy" class="btn copy-btn">
    <i class="icon icon-copy" />
  </button>
</div>
