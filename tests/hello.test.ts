import app from '@/app'
import supertest from 'supertest'

describe('hello', () => {
  it('GET should return hello response', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .expect({ message: 'Hello, world!' })
  })

  it('POST should echo request body', async () => {
    await supertest(app)
      .post('/')
      .send({ name: 'zak' })
      .expect(200)
      .expect({ name: 'zak' })
  })
})
