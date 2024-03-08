require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const connectDB = require('./config/dbConn.js')
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions = require('./config/corsOptions.js')
const cookieParser = require('cookie-parser')

connectDB()

const app = express()

app.use(express.json())

app.use(cors(corsOptions))

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.use('/users', require('./routes/userRoutes.js'))
app.use('/horas', require('./routes/horasRoutes.js'))

app.use('*', (req, res) => {
  if(req.accepts('html')){
    res.sendFile(path.join(__dirname, 'view', '404'))
  }else if(req.accepts('json')){
    res.json({ message: '404 page not found'})
  }else{
    res.type('txt').send('404 not found')
  }
})

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
