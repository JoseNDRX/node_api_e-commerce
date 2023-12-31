const { Op } = require("sequelize");
const ProductsInOrder = require("../models/ProductsInOrder.model");
const Products = require("../models/products.model");

const createProductInOrder = async (productInOrder) => {
  const order = await ProductInOrder.create(productInOrder);
  return order;
};

const getOneProductInOrder = async (dataProductInCar) => {
  const product = await ProductsInOrder.findOne({
    where: {
      [Op.and]: [
        { productId: dataProductInCar.productId },
        { orderId: dataProductInCar.orderId },
      ],
    },
  });
  return product;
};

const updateTotalInOrder = async (price, orderId) => {
  const productInOrder = await ProductsInOrder.increment(
    { price: price },
    {
      where: { orderId },
    }
  );
  return productInOrder;
};

const updateQantityInOrder = async (productId, orderId) => {
  const product = await ProductInOrder.increment(
    {
      quantity: 1,
    },
    {
      where: {
        [Op.and]: [{ productId: productId }, { orderId: orderId }],
      },
    }
  );
  return product;
};

const getOrderDetailsByOrderId = async (orderId) => {
  const order = await ProductInOrder.findAll({
    where: { orderId },
    include: [
      {
        model: Products,
        attributes: {
          exclude: ["userId", "description", "status", "available"],
        },
      },
    ],
  });
  return order;
};

module.exports = {
  createProductInOrder,
  getOneProductInOrder,
  updateTotalInOrder,
  updateQantityInOrder,
  getOrderDetailsByOrderId,
};
