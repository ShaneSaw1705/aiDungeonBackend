import express from 'express'

const route = express.Router()

route.get('/', (req, res) => {
  res.json('test-route').status(200)
})

export default route
