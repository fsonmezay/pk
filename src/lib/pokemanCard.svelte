<script>
	import Transition from './Transition.svelte';

	export let pokeman;
</script>

<Transition>
	<a class="p-6 mb-5 bg-gray-200 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
		href={`/pokemon/${pokeman.id}`}>
		<img class="h-40 w-40" src={pokeman.image} alt={pokeman.name} />
		<h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
	</a>
</Transition>
