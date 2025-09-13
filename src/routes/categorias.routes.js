const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

router.get('/', categoriasController.index);

router.get('/:id', categoriasController.show);

module.exports = router;
