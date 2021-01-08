import test from 'japa'

test.group('Example', () => {
  test('assert sum', (assert) => {
    assert.equal(2 + 2, 4)
  })
  test('assert sum1', (assert) => {
    assert.equal(2 + 4, 6)
  })
})
