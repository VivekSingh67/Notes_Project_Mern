const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;
        const isAleradyExists = await userModel.findOne({ email: email });
        if (isAleradyExists) {
            return res.status(401).json({
                message: "user already exists"
            })
        }

        let hashPassword = await bcrypt.hash(password, 10)
        let user = await userModel.create({
            fullname,
            email,
            password: hashPassword
        })
        let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.cookie("token", token)
        res.status(200).json({
            message: "User Successfully Created",
            userData: {
                id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error.message)
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        const user = await userModel.findOne({ email: email })
        if (!user) {
            res.status(401).json({
                message: "Somthing Want Wrong"
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (isValidPassword) {
            let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.cookie("token", token)
            res.status(200).json({
                message: "user login successfully",
                userData: {
                    id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        } else {
            res.status(401).json({
                message: "Something Want Wrong"
            })
        }

    } catch (error) {
        console.log("error", error.message)
    }
}

const logoutUser = (req, res) => {
    res.clearCookie("token")
    res.status(200).json({ message: "Logout successful" })
}

module.exports = { registerUser, loginUser, logoutUser }