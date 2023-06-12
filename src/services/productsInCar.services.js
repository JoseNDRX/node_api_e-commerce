const {
  createProductInCar,
  getOneProduct,
  updateTotal,
  updateQantity,
  getProductInCar,
  pourchaseProduct,
  clearProductInCar,
} = require("../repositories/productInCar.repository");
class ProductsInCarServices {
  static async createProductInCarService(dataProductInCar) {
    return await createProductInCar(dataProductInCar);
  }

  static async addNewProducts(data) {
    try {
      const product = await getOneProduct(data.productId);
      await updateTotal(data.price, data.productId);
      if (!product || product.dataValues.status) {
        return await createProductInCar(data);
      }
      return await updateQantity(data.productId);
    } catch (error) {
      throw error;
    }
  }

  static async getProductInCarServices() {
    return await getProductInCar();
  }

  static async clearProductInCarServices(dataProduct) {
    try {
      await pourchaseProduct(dataProduct);
      const listCar = await clearProductInCar(dataProduct.carId);
      return listCar;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsInCarServices;
