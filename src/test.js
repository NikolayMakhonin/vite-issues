const testFiles = import.meta.glob('__TESTS_FILES__')

describe.concurrent('all', async function () {
  await Promise.all(Object.keys(testFiles).map(async testFile => {
    await testFiles[testFile]()
  }))
})
