<script>
  import { fly } from "svelte/transition";
</script>

<div
  in:fly={{ y: -20, duration: 125, delay: 200 }}
  out:fly={{ y: -20, duration: 125 }}>
  <slot />
</div>
