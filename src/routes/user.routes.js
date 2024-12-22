const express = require('express')
const Router = express.Router()
const verifyToken = require('../middlewares/authentication')
const {Register}  = require('../controller/user.controller')

Router.post('/register',verifyToken , Register)



module.exports = Router