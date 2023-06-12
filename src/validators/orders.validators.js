const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createOrderValidator = [
  check("userId", "error in userId")
    .exists()
    .withMessage("userId is required")
    .notEmpty()
    .withMessage("userId can't be null")
    .isInt()
    .withMessage("userId should be a integer"),
  validateResult,
];

const completedOrderValidator = [
  check("carId", "Error in carId")
    .exists()
    .withMessage("carId is required")
    .notEmpty()
    .withMessage("carId can't be null")
    .isInt()
    .withMessage("carId should be a integer"),
  validateResult,
];

const addOrderDetailtValidator = [
  check("orderId", "Error in orderId")
    .exists()
    .withMessage("orderId is required")
    .notEmpty()
    .withMessage("orderId can't be null")
    .isInt()
    .withMessage("orderId should be a integer"),
  check("productId", "Error en campo productId")
    .exists()
    .withMessage("productId is required")
    .notEmpty()
    .withMessage("productId can't be null")
    .isInt()
    .withMessage("productId should be a integer"),
  check("price", "Error in price")
    .exists()
    .withMessage("price is required")
    .notEmpty()
    .withMessage("price can't be null")
    .isFloat()
    .withMessage("price should be a real number"),
  validateResult,
];

module.exports = {
  createOrderValidator,
  completedOrderValidator,
  addOrderDetailtValidator,
};
