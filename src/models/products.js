const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Products = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Type a valid name",
        },
        notIn: {
          msg: "Type a valid name",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Can't be empty",
        },
      },
    },
    price: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Can't be empty",
        },
        isFloat: {
          msg: "Price must be a real number",
        },
      },
    },
    availableQty: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      field: "avalible_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
      validate: {
        notEmpty: {
          msg: "Can't be empty",
        },
      },
    },
    productImage: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: "product_image",
      validate: {
        notEmpty: {
          msg: "Can't be empty",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;
