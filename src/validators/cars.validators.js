const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const addToCarValidator = [
  check("carId", "Error in carId")
    .exists()
    .withMessage("carId is required")
    .notEmpty()
    .withMessage("carId can't be empty")
    .isInt()
    .withMessage("cardId should be a integer"),
  check("productId", "Error in productId")
    .exists()
    .withMessage("productId is required")
    .notEmpty()
    .withMessage("productId can't be empty")
    .isInt()
    .withMessage("productId should be a integer"),
  check("price", "error in price")
    .exists()
    .withMessage("price is required")
    .notEmpty()
    .withMessage("price can't be empty")
    .isFloat()
    .withMessage("price should be a real number"),
  validateResult,
];

module.exports = {
  addToCarValidator,
};
