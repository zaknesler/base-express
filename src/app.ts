import express from 'express'
import * as hello from './controllers/hello'

const app = express()

app.use(express.json())

app.get('/', hello.index)
app.post('/', hello.post)

export default app
