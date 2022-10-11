const { createStoreService, getStoreService, getStoreServiceById } = require("../services/store.services");

module.exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);

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
module.exports.getStore = async (req, res, next) => {
  try {
    const result = await getStoreService();

    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't find data",
      error: error,
    });
  }
};
module.exports.getStoreById = async (req, res, next) => {
  try {
    const result = await getStoreServiceById(req.params.id);

    res.status(200).json({
      status: true,
      message: "data get success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "can't find data",
      error: error,
    });
  }
};
