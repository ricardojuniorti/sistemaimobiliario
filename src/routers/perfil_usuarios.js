const express = require("express");
const router = express.Router(); 
const controller = require("../controllers/perfil_usuarioController");   

//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);
//post
router.post("/", controller.add);
//update
router.put("/:id", controller.update);
//delete
router.delete("/", controller.delete);
router.delete("/apagatudo", controller.deleteAll);

module.exports = router;

