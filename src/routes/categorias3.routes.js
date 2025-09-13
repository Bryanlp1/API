const express = require('express');
const router = express.Router();
const categorias3Controller = require('../controllers/categorias3.controller');

router.get('/', categorias3Controller.index);

router.get('/create', categorias3Controller.create);

router.post('/create', categorias3Controller.store);

router.get('/:id', categorias3Controller.show);

module.exports = router;
