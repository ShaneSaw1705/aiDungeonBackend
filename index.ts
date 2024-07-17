import express, { Request, Response } from "express";
import testRoute from './routes/route'

const app = express()
const port = 3000

app.use('/test', testRoute)

app.get('/', (req: Request, res: Response): Response => {
  return res.json('test').status(200)
})

app.get('/:id', (req: Request, res: Response): Response => {
  const { id } = req.params
  return res.json(id).status(200)
})

app.listen(port, (): void => {
  console.log(`app running on port:${port}`)
})
