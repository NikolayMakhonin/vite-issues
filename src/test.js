import {globby} from 'globby'

describe.concurrent('all', async function () {
  const testFiles = await globby('src/**/*.test*')
  await Promise.all(testFiles.map(async testFile => {
    await import(testFile)
  }))
})
