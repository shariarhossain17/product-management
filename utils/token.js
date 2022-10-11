const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.generateToken = (userInfo) => {
    const payload ={
        email:userInfo.email,
        role:userInfo.role
    }
    const token = jwt.sign(payload,process.env.token,{
        expiresIn:"7d"
    })

    return token
}
