const s=async function({fetch:e,num:t}){const a=`https://pokeapi.co/api/v2/pokemon?limit=${t}`;return{pokemon:(await(await e(a)).json()).results.map((n,o)=>({name:n.name,id:o+1,image:`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${o+1}.png?raw=true`}))}},l=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{l as _,s as l};
