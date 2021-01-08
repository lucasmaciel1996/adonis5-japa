import test from 'japa'

test.group('Example Hook', (group) => {
  group.beforeEach(async () => {
    console.log('before every test')
  })

  group.afterEach(async () => {
    console.log('after every test')
  })

  test('assert sum1', (assert) => {
    assert.equal(2 + 4, 6)
  })

  test('assert sum2', (assert) => {
    assert.equal(2 + 4, 6)
  })
})
