const express = require('express');
const router = express.Router();
const { getCarts } = require('../controllers/carts.controller');

router.get('/', getCarts);

module.exports = router;
