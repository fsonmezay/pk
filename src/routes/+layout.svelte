<script>
	import '../app.css';
	import Nav from '../lib/nav.svelte';
	import Transition from '../lib/Transition.svelte';
</script>

<Nav />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>
