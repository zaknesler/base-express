import { Request, Response } from 'express'

const index = (_: Request, res: Response): Response => {
  return res.status(200).json({
    message: 'Hello, world!',
  })
}

export default { index }
