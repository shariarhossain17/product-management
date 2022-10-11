const { createBrandService, getBrandService, getBrandServiceById, updateBrandServiceById } = require("../services/brand.services")


module.exports.createBrand = async (req,res,next) => {
    try {
        const result = await createBrandService(req.body)
        res.status(200).json({
            status:true,
            message:"data insert success"
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can not insert data",
            error:error
        })
    }
}
module.exports.getBrand = async (req,res,next) => {
    try {
        const result = await getBrandService()
        res.status(200).json({
            status:true,
            message:"data insert success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can not get data",
            error:error
        })
    }
}
module.exports.getBrandById = async (req,res,next) => {
    try {
        const result = await getBrandServiceById(req.params)

        if(!result){
            res.status(400).json({
                status:false,
                message:"can not get data",
                error:error
            })
        }
        res.status(200).json({
            status:true,
            message:"data insert success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can not get data",
            error:error
        })
    }
}
module.exports.updateBrandById = async (req,res,next) => {
    try {
        const result = await updateBrandServiceById(req.params.id,req.body)

        if(!result.modifiedCount){
            res.status(400).json({
                status:false,
                message:"can not get data",
                error:error
            })
        }
        res.status(200).json({
            status:true,
            message:"data updated success",
            data:result
        })
    } catch (error) {
        res.status(400).json({
            status:false,
            message:"can not updated data",
            error:error
        })
    }
}