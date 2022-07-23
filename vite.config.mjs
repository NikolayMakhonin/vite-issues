import { replaceCodePlugin as replace } from "vite-plugin-replace";

/** @type {import('vite').UserConfig} */
const config = {
  test: {
    threads: false,
    isolate: false,
    maxConcurrency: 10,
    minThreads: 1,
    maxThreads: 1,
    globals: true,
    include: [
      // 'src/test.js',
      'src/**/*.test.js',
    ],
    watch: true,
    // concurrentFiles: true,
  },
  plugins: [
    replace({
      replacements: [
        {
          from: '__TESTS_FILES__',
          to: process.env.TESTS_FILES || './**/*.test.*',
        }
      ],
    }),
  ],
};

export default config;
