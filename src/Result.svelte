<section>
  <h2>Results</h2>
  {#each urls as urlConfig}
    <div class="urlconfig-container">
      <p class="label-name">{urlConfig.name}</p>
      <DisplayUrl url={urlConfig.url} />
    </div>
  {/each}
</section>

<style>
  .urlconfig-container {
    margin: 1rem 0;
  }
  .label-name {
    margin-bottom: 0.2rem;
  }
</style>

<script>
import DisplayUrl from "./DisplayUrl.svelte";

export let urls;
</script>