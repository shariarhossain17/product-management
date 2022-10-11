const Store = require('../models/store.model')

exports.createStoreService = async (data) => {
    const result = await Store.create(data)
    return result
}
exports.getStoreService = async () => {
    const result = await Store.find({})
    return result
}
exports.getStoreServiceById = async (id) => {
    const result = await Store.findOne({_id:id})
    return result
}