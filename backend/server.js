require('dotenv').config()
const app = require('./app')
const db = require('./src/db/db')

app.listen(3000, () => {
    console.log("Server is running port 3000")
})