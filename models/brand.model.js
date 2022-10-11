const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const validator = require("validator");

const brandSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide brand name"],
    trim: true,
    unique: true,
    maxLength: 100, 
    lowercase:true
  },
  description: {
    type:String,
    required:true
  },
  email: {
    type: String,
    lowercase:true,
    validate: [validator.isEmail, "provide valid email"],
  },
  website: {
    type: String,
    validate: [validator.isURL, "provide url"],
  },
  location: String,
  products: [
    {
      type: ObjectId,
      ref: "Product",
    },
  ],
  supplier: [
    {
      name: String,
      contactNumber: String,
      id: {
        type:ObjectId,
        ref:"Supplier"
      }
    },
  ],
  status:{
    type:String,
    enum:["active","inactive"],
    default:"active"
  }
},{
    timestamps:true
});


const Brand  = mongoose.model("Brand",brandSchema);

module.exports = Brand;
