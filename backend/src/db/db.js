const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/Notes').then(() => {
    console.log("DB Connected")
}).catch((error) => {
    console.log("Error", error.message)
})

module.exports = mongoose.connection;