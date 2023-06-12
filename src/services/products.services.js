const {
  createProducts,
  updateDescription,
  getProductsUser,
} = require("../repositories/products.repositories");

class ProductService {
  static async createNewProduct(newProduct) {
    try {
      const product = await createProducts(newProduct);
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async updateDescriptionService(description, id) {
    try {
      const product = await updateDescription(description, id);
      return product;
    } catch (error) {
      throw error;
    }
  }
  static async getProductsUser() {
    try {
      const product = await getProductsUser();
      return product;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
