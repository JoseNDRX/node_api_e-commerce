const UsersServices = require("../services/users.services");
require("dotenv").config();
const CarsServices = require("../services/cars.services");

const createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hash = await UsersServices.hashed(password);
    const user = await UsersServices.createNewUser({
      username,
      email,
      password: hash,
    });
    res.status(201).send();
    await CarsServices.createNewCar({ userId: user.dataValues.id });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UsersServices.login(email);
    await UsersServices.verifyUser(user, next);
    await UsersServices.validPassword(password, user, next);
    const { firstname, lastname, id, username, rolId } = user;
    const userData = { firstname, lastname, id, username, email, rolId };
    const token = await UsersServices.token(userData);
    userData.token = token;
    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const { filename } = req.file;
    await UsersServices.updateUserService(filename, username, id);
    res.status(201).json({ message: "Success image loaded" });
  } catch (error) {
    next(error);
  }
};

const getUserbyId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UsersServices.getProductsInCar(id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const getOrdersByUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UsersServices.getOrders(id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createUser,
  login,
  updateUser,
  getUserbyId,
  getOrdersByUserId,
};
