const { Router } = require("express");
const {
  createProduct,
  updateDescription,
  getProductsUser,
} = require("../controllers/products.controlles");
const upload = require("../middlewares/multer.middleware");
const {
  createProductValidator,
  updateDescriptionValidator,
} = require("../validators/products.validators");

const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/products", authenticate, upload, createProduct);
router.post("/products", authenticate, upload, createProduct);
router.put("/products", authenticate, updateDescription);
router.post("/products", upload, createProduct);
router.put("/products", updateDescriptionValidator, updateDescription);
router.get("/products", authenticate, getProductsUser);
router.put("/products/:id", updateDescriptionValidator, updateDescription);
router.get("/products", getProductsUser);

module.exports = router;
