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
  },
};

export default config;
