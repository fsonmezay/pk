const n=async function({fetch:o,params:e}){const t=`https://pokeapi.co/api/v2/pokemon/${e.id}`;return{pokeman:await(await o(t)).json()}},p=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{p as _,n as l};
