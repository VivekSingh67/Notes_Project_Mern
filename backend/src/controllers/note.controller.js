const noteModel = require('../models/note.model');
const userModel = require('../models/user.model');

const createNote = async (req, res) => {
    try {
        let { title, description } = req.body;
        let notes = await noteModel.create({
            user: req.user._id,
            title,
            description,
        })
        res.status(200).json({
            mesage: "Note Create Successfully",
            noteData: {
                id: notes.id,
                title: notes.title,
                description: notes.description
            }
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

const getNotesData = async (req, res) => {
    try {
        const user = req.user
        const notes = await noteModel.find({ user: user._id })
        res.status(200).json({
            message: "Data Get Successfully",
            notes: notes
        })

    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}


const updateNotesData = async (req, res) => {
    try {
        const user  = req.user
        const notes = await noteModel.findOneAndUpdate({ _id: req.params.id }, { title: req.body.title, description: req.body.description })
        const notesData = await noteModel.findOne({_id: req.params.id})
         res.status(200).json({
            message: "Notes Updated Successfully",
            notesData
        })

    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}

module.exports = { createNote, getNotesData, updateNotesData }