const { check, body } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  body("image").custom((value, { req }) => {
    if (!req.file || !req.file.image) {
      throw new Error("image is required");
    }
    return true;
  }),
  check("name", "Error in name")
    .exists()
    .withMessage("name is required")
    .notEmpty()
    .withMessage("name can't be null")
    .isString()
    .withMessage("name should be a string")
    .isLength({ min: 6, max: 30 })
    .withMessage("name chould have a 6 to 30 length"),
  check("description", "Error in description")
    .exists()
    .withMessage("description is required")
    .notEmpty()
    .withMessage("description can't be null")
    .isString()
    .withMessage("description should be a string"),
  check("price", "error in price")
    .exists()
    .withMessage("price is required")
    .notEmpty()
    .withMessage("price can't be null")
    .isFloat()
    .withMessage("price should be a real number"),
  check("userId", "Error in userId")
    .exists()
    .withMessage("userId is required")
    .notEmpty()
    .withMessage("userId can't be null")
    .isInt()
    .withMessage("userId should be a integer"),
  validateResult,
];

const updateDescriptionValidator = [
  check("description", "Error in description")
    .exists()
    .withMessage("description is required")
    .notEmpty()
    .withMessage("description can't be null")
    .isString()
    .withMessage("description should be a string "),
  check("id", "Error en id")
    .exists()
    .withMessage("id is required")
    .notEmpty()
    .withMessage("id can't be null")
    .isInt()
    .withMessage("id should be a integer"),
];

module.exports = { createProductValidator, updateDescriptionValidator };
