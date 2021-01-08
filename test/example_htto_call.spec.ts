import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `https://www.google.com.br/`

test.group('Welcome', () => {
  test('ensure home page works', async (assert) => {
    /**
     * Make request
     */
    const re = await supertest(BASE_URL).get('/').expect(200)
  })
})
