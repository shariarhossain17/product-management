const User = require('../models/user.schema')

exports.userCreateService = async (data)=>{
    console.log(data);
    const result = await User.create(data)
    return result
}
exports.userLogin = async (email)=>{
    const user = await User.findOne({email})
    return user
}
