const router = require("express").Router();

const storeController = require("../controller/store.controller")

router.route("/").
post(storeController.createStore)
.get(storeController.getStore)


router.route('/:id')
.get(storeController.getStoreById)

module.exports = router;
