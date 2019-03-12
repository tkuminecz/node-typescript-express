import * as test from 'tape'
import prepareApp from '@app/app'

test('example', async (t) => {
  t.plan(1)

  const start = await prepareApp()
  t.ok(typeof start === 'function')
})
