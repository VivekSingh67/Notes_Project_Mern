const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const authUserMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(400).json({
            message: "Please Login First"
        })
    }

    try {
        let decode = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decode.id)
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

}

module.exports = { authUserMiddleware }