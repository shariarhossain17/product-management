const router = require("express").Router();

const supplierController= require("../controller/supplier.controller");
const authorization = require("../middleware/authorization");
const verifyToken = require("../middleware/verifyToken");

router.route("/").
post(supplierController.createSupplier)
.get(verifyToken,authorization("buyer"),supplierController.getSupplier)


router.route('/:id')
.patch(supplierController.updateSupplier)

module.exports = router;