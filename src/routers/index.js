const express = require("express");
const router = express.Router();    

router.get("/", (req, res) => {
    console.log("Executando a index.js");
    res.send("API | Sistema Imobiliario | versão 1.0 - by Ricardo Junior | e-mail: ricardojuniorti@gmail.com");
});

module.exports = router;