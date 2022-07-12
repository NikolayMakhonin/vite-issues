import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe.concurrent('tests1', function () {
  it('test1', async function () {
    await delay(1000)
    console.log(`test1_1: order=2, globalNumber=${globalNumber}`)
    await delay(1500)
    console.log(`test1_2: order=5, globalNumber=${globalNumber}`)
  })
})
