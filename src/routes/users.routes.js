// Router de express
const { Router } = require("express");
const {
  createUser,
  login,
  updateUser,
  getUserbyId,
  getOrdersByUserId,
} = require("../controllers/users.controlles");
const {
  createUserValidator,
  loginUserValidator,
} = require("../validators/user.validators");
const upload = require("../middlewares/multer.middleware");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", createUserValidator, createUser);

router.post("/users/login", loginUserValidator, login);

router.put("/users/:id", authenticate, upload, updateUser);

router.get("/users/:id", authenticate, getUserbyId);

router.get("/user/orders/:id", authenticate, getOrdersByUserId);

module.exports = router;
