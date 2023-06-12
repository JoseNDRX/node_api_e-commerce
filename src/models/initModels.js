const Users = require("./users.model");
const Cars = require("./cars.model");
const Products = require("./products.model");
const ProductsInCar = require("./productInCar.model");
const Orders = require("./orders.model");
const ProductsInOrder = require("./ProductInOrder.model");

const initModels = () => {
  Users.hasMany(Products, { foreignKey: "userId" });
  Products.belongsTo(Users, { foreignKey: "userId" });

  Users.hasOne(Cars, { foreignKey: "userId" });
  Cars.belongsTo(Users, { foreignKey: "userId" });

  Users.hasMany(Orders, { foreignKey: "userId" });
  Orders.belongsTo(Users, { foreignKey: "userId" });

  Cars.hasMany(ProductsInCar, { foreignKey: "carId" });
  ProductsInCar.belongsTo(Cars, { foreignKey: "carId" });

  Products.belongsTo(ProductsInCar, { foreignKey: "productId" });
  ProductsInCar.hasMany(Products, { foreignKey: "productId" });

  ProductsInOrder.belongsTo(Orders, { foreignKey: "orderId" });
  Orders.hasMany(ProductsInOrder, { foreignKey: "orderId" });

  ProductsInOrder.hasMany(Products, { foreignKey: "productId" });
  Products.belongsTo(ProductsInOrder, { foreignKey: "productId" });
};

module.exports = initModels;
