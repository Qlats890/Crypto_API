const express = require('express')
const { getTopCrypto } = require('../../controllers/cryptoInfo')
const route = express.Router()

route.get('/top5Crypto/q?',getTopCrypto)

module.exports = route