<script>
    import Transition from '../../../lib/Transition.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<Transition>
<h1>{data.pokeman.name}</h1>
<!-- <div>{@html data.pokeman.}</div> -->
</Transition>
