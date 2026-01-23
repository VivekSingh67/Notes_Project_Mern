const mongoose = require('mongoose');

const noteModel = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color:{
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('notes', noteModel)