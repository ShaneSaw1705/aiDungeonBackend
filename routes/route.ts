import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response): Response => {
  return res.json('test-router').status(200)
})

export default router
