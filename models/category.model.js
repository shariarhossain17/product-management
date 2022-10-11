const mongoose = require("mongoose");
const validator = require("validator")




const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide category  name"],
        trim: true,
        unique: true,
        maxLength: 100, 
        lowercase:true
      },
      description:true,
      imgUrl:{
        type:String,
        validate:[validator.isURL, "provide url"]
      }
},{
    timestamps:true
})

const Category = mongoose.model("Category",categorySchema);



module.exports = Category