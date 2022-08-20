// import { writable } from "svelte/store";

// export const pokemon = writable([]);

// const fetchPokemon = async (num) => {
//     const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     const lodaedPokemon = data.results.map((data, index) => {
//         return {
//             name: data.name,
//             id: index+1, 
//             image: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index + 1}.png?raw=true`
//         }
//     });
//     pokemon.set(lodaedPokemon);
// };
// fetchPokemon(`10`);