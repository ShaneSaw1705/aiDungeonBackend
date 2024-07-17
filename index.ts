import express from "express";
import testRoute from './routes/route'

const app = express()
const port = 3000

app.use('/test', testRoute)

app.get('/', (req, res) => {
  res.json('test').status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
