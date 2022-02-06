const express = require("express");
const router = express.Router(); 
const controller = require("../controllers/usuariosController");   

//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);
//post
router.post("/", controller.add);
//update
router.put("/:id", controller.update);
//delete
router.delete("/", controller.delete);
//router.delete("/", controller.deleteAll);

module.exports = router;

