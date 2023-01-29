import { type RequestHandler } from 'express'

export const index: RequestHandler = async (req, res) => {
  const name = req.query.name || 'world'

  return res.status(200).json({
    message: `Hello, ${name}!`,
  })
}

export const post: RequestHandler = async (req, res) => {
  return res.status(200).json(req.body)
}
