<script>
    // import {pokemon} from "../stores/pokestore.js"
    import PokemanCard from "../lib/pokemanCard.svelte";
import Transition from "../lib/Transition.svelte";

    export let data=[];
    var searchTerm='';
    var filtered=[];

    $: {
        
        if(searchTerm) {
            filtered = data.pokemon.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        else {
            filtered = [...data.pokemon]
        }
    }
</script>
<svelte:head>
    <title>Pokedex</title>
</svelte:head>
<Transition>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<input bind:value={searchTerm} type="text" class="w-full rounded-md text-lg p-4 border-2 border-gray-200" placeholder="Search">
 
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
{#each filtered as pokeman}
    <PokemanCard {pokeman} />
{/each}
</div>
</Transition>


