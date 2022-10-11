
const mongoose = require("mongoose")
const colors = require("colors")

 const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/product-management', {
    }).then(data => {
        console.log(colors.yellow("db connected").bold);
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connectDb