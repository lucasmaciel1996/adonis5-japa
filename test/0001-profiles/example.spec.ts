import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
test.group('0001- Profiles', () => {
  test('00001-A', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/v1/profile/me').expect(200)
    console.log(text)
  })

  // test('00001-B', (assert) => {
  //   assert.equal(2 + 2, 4)
  // })
})
