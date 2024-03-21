const User = require('../models/User.js')
const Hora = require('../models/Hora.js')
const asyncHandler = require('express-async-handler')


const getAllHoras = asyncHandler( async (req, res) => {
  const horas = await Hora.find().lean()

  if(!horas?.length){
    return res.status(400).json({ message: "Ninguna hora encontrada"})
  }

  const horasWithUser = await Promise.all(horas.map( async (note) => {
    const user = await User.findById(note.user).lean().exec()
    return {...horas, userName: user?.userName}
  }))

  res.json(horasWithUser)
})

const createNewHora = asyncHandler( async (req, res) => {
  const { user, fechaHora, nombrePaciente, rutPaciente, 
          telefonoPaciente, correoPaciente, nombreDoctor, especialidad } = req.body
  
  if(!user || !fechaHora || !nombrePaciente || !rutPaciente || !telefonoPaciente || !correoPaciente || !nombreDoctor || !especialidad){
    return res.status(409).json({ message: "Todos los campos son requeridos"})
  }

  // Check for duplicate appointments
  const duplicate = await Hora.findOne({ fechaHora }).lean().exec()
  
  if(duplicate){
    return res.status(400).json({message: "Esta hora ya ha sido tomada"})
  }

  const horaObj = { user, fechaHora, nombrePaciente, rutPaciente, 
  telefonoPaciente, correoPaciente, nombreDoctor, especialidad }

  const newHora = await Hora.create(horaObj)

  if(!newHora){
    res.status(400).json({message: "Error creando la hora"})
  }else{
    res.status(200).json({message: `Nueva hora creada con el doctor ${nombreDoctor}`})
  }
})

const updateHora = asyncHandler( async (req, res) => {
  const { _id, user, fechaHora, nombrePaciente, rutPaciente, 
          telefonoPaciente, correoPaciente, nombreDoctor, especialidad } = req.body
  
  if(!user || !fechaHora || !nombrePaciente || !rutPaciente || !telefonoPaciente || !correoPaciente || !nombreDoctor || !especialidad){
    return res.status(409).json({ message: "Todos los campos son requeridos"})
  }

  const appointment = await Hora.findById(_id).exec()

  if(!appointment){
    return res.status(400).json({ message: "Hora no encontrada"})
  }

  // Check for duplicate appointment
  const duplicate = await Hora.findOne({ fechaHora })

  if(duplicate && duplicate?._id.toString() !== user){
    return res.status(400).json({ message: "Esta hora no está disponible"})
  }

  appointment.user = user
  appointment.fechaHora = fechaHora
  appointment.nombrePaciente = nombrePaciente
  appointment.rutPaciente = rutPaciente
  appointment.telefonoPaciente = telefonoPaciente
  appointment.correoPaciente = correoPaciente
  appointment.nombreDoctor = nombreDoctor
  appointment.especialidad = especialidad

  const updateAppointment = await appointment.save()
  
  if(!updateAppointment){
    return res.status(400).json({ message: "No se ha podido actualizar la hora"})
  }

  res.status(200).json({ message: "Hora actualizada correctamente"})

})

const deleteHora = asyncHandler( async (req, res) => {
  const { _id } = req.body

  if(!_id){
    return res.status(400).json({ message: "No se ha encontrado la id de la hora"})
  }

  const hora = await Hora.findById(_id).exec()

  if(!hora){
    res.status(400).json({ message: "Hora no encontrada"})
  }

  const deleted = await hora.deleteOne()

  if(!deleted){
    res.status(400).json({ message: "La hora no ha podido ser anulada"})
  }

  res.status(200).json({ message: "La hora ha sido anulada"})
})

module.exports = { getAllHoras, createNewHora, updateHora, deleteHora }