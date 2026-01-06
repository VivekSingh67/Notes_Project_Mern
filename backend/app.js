const express = require('express');
const app = express();
const path = require("path");
const cookiesParser = require('cookie-parser');
const userRoutes = require('./src/routes/auth.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookiesParser())

app.use('/api', userRoutes)


module.exports = app;