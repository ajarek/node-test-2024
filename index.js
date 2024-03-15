const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()
const cors = require('cors')
const PORT = 3000
require('dotenv').config()
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated')
})

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to database!')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(() => {
    console.log('Connection failed!')
  })
