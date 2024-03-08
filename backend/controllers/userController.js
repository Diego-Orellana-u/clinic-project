const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const User = require('../models/User.js')
const Hora = require('../models/Hora.js')

// @desc Get all users
// @route GET /users
// @access Private

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean()

  if(!users?.length){
    return res.status(400).json({message: 'Sin usuarios encontrados'})
  }

  res.json(users)
})

// @desc Create user
// @route POST /users 
// @access Private

const createNewUser = asyncHandler(async (req, res) => {
  const { userName, password, role } = req.body

  if(!userName || !password || !Array.isArray(role) || !role?.length){
    return res.status(400).json({ message: "Hay datos sin rellenar"})
  }

  // Check for duplicates
  const duplicate = await User.findOne({userName: userName}).lean().exec()
  if(duplicate){
    return res.status(409).json({ message: 'Nombre de usuario duplicado'})
  }

  // Hash password
  const hashedPsw = await bcrypt.hash(password, 10)

  if(!hashedPsw){
    return res.status(400).json({ message: "La contraseña no ha podido ser encriptada"})
  }

  const userObj = { userName, "password": hashedPsw, role }

  const user = await User.create(userObj)
  
  if(user){
    res.status(201).json({ message: `New user ${userName} created`})
  }else {
    res.status(400).json({ message: 'Invalid user data received'})
  }
})

// @desc Update a user
// @route PATCH /users
// @access Private

const updateUser = asyncHandler(async (req, res) => {
  const { userName, id, role, active,  password } = req.body


  if(!id || !userName || !Array.isArray(role) || !role.length || typeof active !== 'boolean'){
    return res.status(400).json({ message: "Hay datos faltantes"})
  } 

  const user = await User.findById(id).exec()

  if(!user){
    return res.status(400).json({ message: "User not found"}) 
  }

  const duplicateUser = await User.findOne({ userName }).lean().exec()

  if(duplicateUser && duplicateUser?._id.toString() !== id){
    return res.status(409).json({ message: "Este nombre de usuario ya existe"})
  }

  user.userName = userName
  user.role = role
  user.active = active

  if(password){
    const hashedPsw = await bcrypt.hash(password, 10)
    user.password = hashedPsw
  }
  
  const updatedUser = await user.save()

  res.status(200).json({ message: `${updatedUser.userName} updated`})
})

// @desc Delete a user
// @route DELETE /users
// @access Private


const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser}