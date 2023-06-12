// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
  check("username", "Error in username")
    .exists()
    .withMessage("username in required")
    .notEmpty()
    .withMessage("username can't be null")
    .isString()
    .withMessage("username should be a string")
    .isLength({ min: 6, max: 30 })
    .withMessage("username should be a 6 to 30 string lenth"),

  check("email", "Error in email")
    .exists()
    .withMessage("email in required")
    .notEmpty()
    .withMessage("email can't be null")
    .isString()
    .withMessage("email should be a string")
    .isEmail()
    .withMessage("email should have a email format")
    .isLength()
    .withMessage("email should be a 10 to 50 string length"),

  check("password", "Error in password")
    .exists()
    .withMessage("password in required")
    .notEmpty()
    .withMessage("password can't be null")
    .isString()
    .withMessage("password should be a string")
    .isLength({ min: 8 })
    .withMessage("password should be a minimun of 8 string length"),
  validateResult,
];

const loginUserValidator = [
  check("email", "Error in email")
    .exists()
    .notEmpty()
    .isEmail()
    .isLength({ min: 10, max: 50 }),
  check("password", "Error in password")
    .exists()
    .notEmpty()
    .isString()
    .isLength({ min: 4 }),
  validateResult,
];

// object.hasOwnProperty('propertyName')
module.exports = { createUserValidator, loginUserValidator };
