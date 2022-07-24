import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import babel from '@rollup/plugin-babel';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			svelte({
				compilerOptions: {
					hydratable: true /* required for clientside hydration */
				}
			}),
			{
				name: 'vite-plugin-babel',
				config(config, config_env) {
					return {
						build: {
							rollupOptions: {
								plugins: [
									babel.default({
										configFile  : path.resolve(dirname, '.babelrc.cjs'), // enable babel for node_modules
										extensions  : ['', '.ts', '.js', '.cjs', '.mjs', '.svelte', '.html'],
										babelHelpers: 'runtime',
										exclude     : [
											// '**/node_modules/rollup*/**',
											'**/node_modules/@babel/**',
											'**/node_modules/core-js*/**',
											'**/.svelte-kit/runtime/server/**'
										],
									}),
								],
							},
						},
					}
				}
			},
		],
		build: {
			target: 'esnext',
			minify: false,
			assetsInlineLimit: 0,
			rollupOptions: {
				output: {
					format: 'esm'
				}
			}
		},
		server: {
			watch: {
				// During tests we edit the files too fast and sometimes chokidar
				// misses change events, so enforce polling for consistency
				usePolling: true,
				interval: 100
			}
		}
	};
});
