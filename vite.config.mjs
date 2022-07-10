import babel from '@rollup/plugin-babel';
import path from 'path';
// import legacy from '@vitejs/plugin-legacy'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		minify: false,
		terserOptions: {
			module: true,
			ecma: 5,
			safari10: true,
			mangle: false,
			format: {
				comments: false,
				max_line_len: 50,
			},
		},
	},
	plugins: [
		{
			name: 'vite-plugin-babel',
			config(config, config_env) {
				return {
					build: {
						rollupOptions: {
							plugins: [
								babel.default({
									configFile  : path.resolve(__dirname, '.babelrc.cjs'), // enable babel for node_modules
									extensions  : ['.ts', '.js', '.cjs', '.mjs', '.svelte', '.html'],
									babelHelpers: 'runtime',
									exclude     : [
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
		// {
		// 	name: 'vite-plugin-print-config',
		// 	configResolved(config, config_env) {
		// 		debugger
		// 		console.log(config)
		// 	},
		// }
	],
};

export default config;
