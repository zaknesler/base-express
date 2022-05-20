import app from '../src/app'
import supertest from 'supertest'

describe('index', () => {
  it('should return hello response', async () => {
    await supertest(app)
      .get('/')
      .expect(200)
      .expect({ message: 'Hello, world!' })
  })
})
