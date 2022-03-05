const express = require("express");
const router = express.Router(); 
const controller = require("../controllers/statusController");   

//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);
//post
router.post("/", controller.add);
//update
router.put("/", controller.update);
//delete
router.delete("/:id", controller.delete);
router.delete("/apagatudo", controller.deleteAll);

module.exports = router;

