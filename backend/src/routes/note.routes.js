const express = require('express');
const routes = express.Router()
const authMiddleware = require('../middlewares/auth.middleware') 
const noteController = require('../controllers/note.controller')

routes.post('/create-note', authMiddleware.authUserMiddleware, noteController.createNote)
routes.get('/notes-data', authMiddleware.authUserMiddleware, noteController.getNotesData)

module.exports = routes;