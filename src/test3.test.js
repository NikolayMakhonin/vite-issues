import { describe, it } from 'vitest'
import {globalNumber} from './globalNumber'
import {delay} from "./delay";

describe('tests3', function () {
  it('test3', async function () {
    await delay(100)
    console.log(`test3: globalNumber=${globalNumber}`)
  })
})
