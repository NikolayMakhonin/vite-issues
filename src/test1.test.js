import {delay} from "./delay";

it('test1', async function () {
  await delay(1000)
  console.log(`test1_1: order=2`)
  await delay(1500)
  console.log(`test1_2: order=5`)
})
