import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe('tests1', function () {
  it('test1', async function () {
    await delay(100)
    console.log(`test1: globalNumber=${globalNumber}`)
  })
})
