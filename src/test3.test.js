import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe.concurrent('tests3', function () {
  it('test3', async function () {
    await delay(1500)
    console.log(`test3_1: order=3, globalNumber=${globalNumber}`)
    await delay(1500)
    console.log(`test3_2: order=6, globalNumber=${globalNumber}`)
  })
})
