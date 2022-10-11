const router = require("express").Router();

const storeController = require("../controller/stock.controller")

router.route("/").
post(storeController.createProduct)
.get(storeController.getStock)


router.route('/:id')
.get(storeController.getProductById)

module.exports = router;
