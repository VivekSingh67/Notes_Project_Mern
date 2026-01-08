const express = require('express');
const app = express();
const path = require("path");
const cookiesParser = require('cookie-parser');
const userRoutes = require('./src/routes/auth.routes')
const noteRouter = require('./src/routes/note.routes')
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookiesParser())

app.use('/api', userRoutes)
app.use('/api/notes', noteRouter)


module.exports = app;