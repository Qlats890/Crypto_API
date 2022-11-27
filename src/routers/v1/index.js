const express = require("express");
const { getTopCrypto } = require("../../controllers/cryptoInfo");
const router = express.Router();

router.get("/topXCrypto/q?", getTopCrypto);

module.exports = router;
