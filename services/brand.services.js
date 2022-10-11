const Brand = require('../models/brand.model')

exports.createBrandService  = async (data) => {
    const result = await Brand.create(data);
    return result

}
exports.getBrandService  = async () => {
    const result = await Brand.find({}).select("-supplier -products");
    return result

}
exports.getBrandServiceById  = async (data) => {
    
    const result = await Brand.findOne({_id:data.id})
    return result

}
exports.updateBrandServiceById  = async (id,data) => {

    const result = await Brand.updateOne({_id:id},data,{
        runValidators:true,
    })
    return result

}