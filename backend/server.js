require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const connectDB = require('./config/dbConn.js')
const mongoose = require('mongoose')

connectDB()

const app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.use('/users', require('./routes/userRoutes.js'))
app.use('/horas', require('./routes/horasRoutes.js'))



const PORT = process.env.PORT || 3500

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})

mongoose.connection.on('error', (err) => {
  console.log(err)
})
