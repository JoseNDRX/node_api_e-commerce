const ProductsService = require("../services/products.services");

const createProduct = async (req, res, next) => {
  try {
    const { filename } = req.file;
    const { name, description, price, available, userId } = req.body;

    await ProductsService.createNewProduct({
      name,
      description,
      price,
      available,
      userId,
      productImage: filename,
    });
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const updateDescription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await ProductsService.updateDescriptionService(description, id);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getProductsUser = async (req, res, next) => {
  try {
    const product = await ProductsService.getProductUserServices();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  updateDescription,
  getProductsUser,
};
