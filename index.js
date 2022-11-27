require("dotenv").config();
const express = require("express");

const Router = require("./src/routers");

const app = express();
const port = process.env.PORT_EXPRESS || 3000;

app.use("/", Router);

app.use((req, res, next) => {
  res.status(404).json({
    msg: "404 - Not Found Ehe!",
  });
});

app.listen(port, () => {
  console.log("PORT IN " + port);
});
