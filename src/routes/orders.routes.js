const { Router } = require("express");

const {
  createOrder,
  completedOrder,
} = require("../controllers/orders.controllers");
const {
  createOrderValidator,
  completedOrderValidator,
} = require("../validators/orders.validators");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/orders", authenticate, createOrderValidator, createOrder);
router.put(
  "/orders/:id",
  authenticate,
  completedOrderValidator,
  completedOrder
);

module.exports = router;
