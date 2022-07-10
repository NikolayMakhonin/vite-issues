'use strict'

module.exports = function (api) {
  api.cache(false)

  return {
    presets: [
      ['@babel/preset-env', {
        loose: true, // simple set property instead readonly defineProperty; +support named export for rollup-plugin-commonjs
      }],
    ],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-transform-runtime', {
        corejs      : 3, // for support flatMap etc...
        useESModules: true,
      }],

      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-throw-expressions',
      ['@babel/plugin-proposal-class-properties', {loose: true}],

      // preset/env no loose:
      ['@babel/plugin-transform-classes', {loose: false}],
    ],
  }
}
