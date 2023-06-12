const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const ProductsInOrder = db.define(
  "products_in_orders",
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "order_id",
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = ProductsInOrder;
