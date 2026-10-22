const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuario.controller")

router.get("/", usuarioController.getAllUser);

router.get("/:id", usuarioController.getUser);

router.post("/", usuarioController.addUser);

router.delete("/:id", usuarioController.deleteUser);

module.exports = router;