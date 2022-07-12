import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe.concurrent('tests2', function () {
  it('test2', async function () {
    await delay(100)
    console.log(`test2: globalNumber=${globalNumber}`)
  })
})
