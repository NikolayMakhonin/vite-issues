import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe.concurrent('tests2', function () {
  it('test2', async function () {
    await delay(500)
    console.log(`test2_1: order=1, globalNumber=${globalNumber}`)
    await delay(1500)
    console.log(`test2_2: order=4, globalNumber=${globalNumber}`)
  })
})
