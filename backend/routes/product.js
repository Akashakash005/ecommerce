const express = require("express");
const {
  getProducts,
  getSingleProduct,
} = require("../controllers/productControllers");
const router = express.Router();

router.route("/products").get(getProducts);

router.route("/product/:id").get(getSingleProduct);

module.exports = router;
