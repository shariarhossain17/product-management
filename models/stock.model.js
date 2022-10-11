const mongoose = require("mongoose");
const validator = require("validator")
const { ObjectId } = mongoose.Schema.Types
const stockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: 'Product'
    },
    name: {
      type: String,
      trim: true,
      required: [true, "provide product name"],
      minLength: [3, "name must be 3 character"],
      maxLength: [100, "name to large"],
      tolowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs", "bag"],
        message: "{VALUE} must be kg/litre/pcs/bag",
      },
    },
    imgUrl: {
      type: String,
      required: true,
      validate: [validator.isURL,"please provide valid url"],
    },

    price: {
      type: Number,
      required: true,
      min: [0, "price can't be negative"],
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stocks", "out-of-stocks", "discontinued"],
        message: "status can  be {VALUE}",
      },
    },
    store: {
      type: String,
      required: [true, "please provide category  name"],
      trim: true,
      enum: {
        values: [
          "dhaka",
          "sylhet",
          "rangpur",
          "barishal",
          "khulna",
          "maymansingh",
        ],
        message: "{VALUE} is not valid name",
      },
      lowercase: true,
      id: {
        type: ObjectId,
        required: true,
        ref: "Store",
      },
    },
    suppliedBy: {
      name: {
        type: String,
        required: [true, "please provide category  name"],
        trim: true,
      },
      id: {
        type: ObjectId,
        ref: "Supplier",
      },
    },
    sellCount:{
      type:Number,
      default:0,
      min:0
    }
  },
  {
    timestamps: true,
  }
);

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
