const mongoose = require("mongoose");
const validator = require("validator");

const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema(
  {
    name: {
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
    },
    description: {
      type:String,
      required:true
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    manager: {
      name: String,
      contactNumber: String,
      id: {
        type: ObjectId,
        ref: "User",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
