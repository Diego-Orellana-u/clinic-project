const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const horaSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  fechaHora: {
    type: String,
    required: true
  },
  nombrePaciente: {
    type: String,
    required: true
  },
  rutPaciente: {
    type: String,
    required: true
  },
  telefonoPaciente: {
    type: String,
    required: true
  },
  correoPaciente: {
    type: String,
    required: true
  },
  nombreDoctor: {
    type: String,
    required: true
  },
  especialidad: {
    type: String,
    required: true
  },
  fechaCreada: {
    type: Date,
    default: Date.now
  }
})

horaSchema.plugin(AutoIncrement, {
  inc_field: 'N°',
  id: 'ticketNums',
  start_seq: 500
})

module.exports = mongoose.model('Hora', horaSchema)