const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route.js')
const app = express()
 const cors = require('cors')
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
  .connect(
    'mongodb+srv://ajarek:ojcBXj5CTnUVeIfA@cluster0.rcwgmot.mongodb.net/lol?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log('Connection failed!')
  })
