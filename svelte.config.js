import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
		paths: {
            // change below to your repo name
            base:"/pk",
        },
		prerender: {
			entries:[],
			default:true
		}
        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
	}
};

export default config;
