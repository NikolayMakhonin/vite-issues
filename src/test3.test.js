import {delay} from "./delay";

describe('tests3', function () {
  it('test3', async function () {
    await delay(1500)
    console.log(`test3_1: order=3`)
    await delay(1500)
    console.log(`test3_2: order=6`)
  })
})
