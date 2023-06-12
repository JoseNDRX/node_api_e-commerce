const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");
const initModels = require("./models/initModels");
const db = require("./utils/database");

initModels();

const app = express();

app.use(cors());
app.use(express.json());

db.sync()
  .then(() => console.log("DB sincronizada"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server OK ");
});

apiRoutes(app);
errorRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
});
