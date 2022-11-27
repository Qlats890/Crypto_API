const express = require("express");
const { getTopCrypto } = require("../../controllers/cryptoInfo");
const route = express.Router();

route.get("/topXCrypto/q?", getTopCrypto);

module.exports = route;
