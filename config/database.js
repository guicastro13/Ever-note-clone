const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado com MONGODB!"))
  .catch((error) => console.log(error));
