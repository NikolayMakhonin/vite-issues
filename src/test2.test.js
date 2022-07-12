import {delay} from "./delay";

it('test2', async function () {
  await delay(500)
  console.log(`test2_1: order=1`)
  await delay(1500)
  console.log(`test2_2: order=4`)
})
