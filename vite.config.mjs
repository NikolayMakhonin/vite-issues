/** @type {import('vite').UserConfig} */
const config = {
  test: {
    threads: false,
    isolate: true,
    maxConcurrency: 10,

    include: [
      'src/**/*.test.js',
    ],
  },
};

export default config;
