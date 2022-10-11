const Supplier = require('../models/supplier.model')

exports.createSupplierService = async (data) => {
    const result = await Supplier.create(data)
    return result
}
exports.getSupplierService = async () => {
    const result = await Supplier.find({})
    return result
}
exports.updateSupplierService = async (id,data) => {
    const result = await Supplier.updateOne({_id:id},data,{
        runValidators:true
    })
    return result
}