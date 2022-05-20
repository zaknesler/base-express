import express, { Express } from 'express'
import HelloController from './controllers/hello'

const app: Express = express()

app.get('/', HelloController.index)

export default app
