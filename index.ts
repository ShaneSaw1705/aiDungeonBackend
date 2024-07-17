import express, { Request, Response } from "express";
import testRoute from './routes/route'

const app = express()
const port = 3000

app.use('/test', testRoute)

app.get('/', (req: Request, res: Response): void => {
  res.json('test').status(200)
})

app.get('/:id', (req: Req, res: Res): void => {
  const { id } = req.params
  res.json(id).status(200)
})

app.listen(port, (): void => {
  console.log(`app running on port:${port}`)
})
