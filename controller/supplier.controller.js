const { createSupplierService, getSupplierService, updateSupplierService } = require("../services/supplier.services");

module.exports.createSupplier = async (req, res, next) => {
    try {
      const result = await createSupplierService(req.body);
  
      res.status(200).json({
        status: true,
        message: "data insert success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "can't create data",
        error: error,
      });
    }
  };
module.exports.getSupplier = async (req, res, next) => {
    try {
      const result = await getSupplierService();
  
      res.status(200).json({
        status: true,
        message: "data get success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "can't get data",
        error: error,
      });
    }
  };
module.exports.updateSupplier = async (req, res, next) => {
    try {
      const result = await updateSupplierService(req.params.id,req.body);
  
      res.status(200).json({
        status: true,
        message: "data updated success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: false,
        message: "can't updated data",
        error: error,
      });
    }
  };