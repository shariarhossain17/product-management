const mongoose = require("mongoose");



const { ObjectId } = mongoose.Schema.Types;


const productSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:[true,"provide product name"],
        minLength:[3,"name must be 3 character"],
        maxLength:[100,"name to large"],
        tolowercase:true
    },
    description:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true,
        enum:{
            values:["kg","litre","pcs","bag"],
            message:"{VALUE} must be kg/litre/pcs/bag"
        }
    },
    imgUrl:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                if(!Array.isArray(value)){
                    return false
                }
                let isValid = true;
                value.forEach(url =>{
                    if(!validator.isUrl(url)){
                        isValid = false;
                    }
                });
                return isValid
            },
            message:"please provide valid] img url"
        }
    },
    category:{
        type:String,
        required:true
    },
    brand:{
        name:{
            type:String,
            required:true
        },
        id:{
            type:ObjectId,
            ref:"Brand",
            required:true
        }
    }
    
},{
    timestamps: true,
})


const Product = mongoose.model("Product",productSchema)

module.exports = Product