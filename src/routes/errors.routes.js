const logError = require("../middlewares/logError.middleware");
const ormErroHandler = require("../middlewares/ormErrorHandler.middleware");
const errorHandler = require("../middlewares/errorHandler.middleware");

const errorRoutes = (app) => {
  app.use(logError);
  app.use(ormErroHandler);
  app.use(errorHandler);

  app.use("*", (req, res) => {
    res.status(404).json({
      message: "Our backend team is workin on it, this route is coming soon!",
    });
  });
};

module.exports = errorRoutes;
