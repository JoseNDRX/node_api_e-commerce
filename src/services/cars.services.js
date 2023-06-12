const {
  createCar,
  updateTotalCarPrice,
} = require("../repositories/cars.repository");

class CarsServices {
  static async createNewCar(newCar) {
    try {
      const car = await createCar(newCar);
      return car;
    } catch (e) {
      throw e;
    }
  }

  static async updateTotalCarPrice(price, id) {
    try {
      const car = await updateTotalCarPrice(price, id);
      return car;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CarsServices;
