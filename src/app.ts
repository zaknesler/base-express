import express, { Express } from 'express'
import * as hello from './controllers/hello'
import * as example from './controllers/example'

const app: Express = express()

app.get('/', hello.index)
app.get('/example', example.index)

export default app
