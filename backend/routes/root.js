const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'view', 'index.html'))
})

module.exports = router
