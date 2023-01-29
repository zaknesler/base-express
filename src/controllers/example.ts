import { Request, Response } from 'express'

export const index = (_: Request, res: Response): Response => {
  return res.status(200).json({
    message: {
      data: 'Example JSON data!'
    },
  })
}
