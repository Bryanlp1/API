const express = require("express");
const router = express.Router();
const inventarioController = require("../controllers/inventario.controller");

router.get("/", inventarioController.index);

router.get("/create", inventarioController.create);

router.post("/create", inventarioController.store);

router.get("/:id", inventarioController.show);

module.exports = router;
