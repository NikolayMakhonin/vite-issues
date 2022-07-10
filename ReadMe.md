# Reproduce steps

```sh
npm create vite@latest
cd <vite project>
pnpm install
```

* add babel dependencies
* add babelrc config
* add vite config
* add rollup babel to the vite config

```sh
vite build --debug
```

* see the `dist/assets/index.[hash].js` file
