const OrdersServices = require("../services/orders.services");
const ProductsInCarServices = require("../services/productInCar.services");
const CarsServices = require("../services/cars.services");
const { sendPurchaseOrderMail } = require("../utils/sendMails");
const ProductsInOrderServices = require("../services/productInOrder.services");

const createOrder = async (req, res, next) => {
  try {
    const { userId, totalPrice } = req.body;

    await OrdersServices.createOrdersService({ userId, totalPrice });

    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const completedOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { carId, email } = req.body;
    await OrdersServices.updateStatusService(id);
    res.status(201).send();
    await ProductsInCarServices.clearProductInCarServices({ carId });
    await CarsServices.updateTotalPrice(0, carId);
    const detailsProduct =
      await ProductsInOrderServices.getProductDetailsServices(id);
    sendPurchaseOrderMail(email, { detailsProduct });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrder,
  completedOrder,
};
