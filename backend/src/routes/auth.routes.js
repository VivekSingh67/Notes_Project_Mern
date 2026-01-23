const express = require('express');
const routes = express.Router();
const authcontroller = require('../controllers/auth.controller')

routes.post('/auth/register', authcontroller.registerUser)
routes.post('/auth/login', authcontroller.loginUser)
routes.get('/auth/logout', authcontroller.logoutUser)

module.exports = routes