const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: [{
    type: String,
    default: 'paciente'
  }],
  active: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('User', userSchema)