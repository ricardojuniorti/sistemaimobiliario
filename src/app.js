const express = require('express');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })    
);

const indexRouter = require("./routers/index");
const usuarioRouter = require("./routers/usuarios");

app.use("/sistema_imobiliario", indexRouter);
app.use("/sistema_imobiliario/usuarios", usuarioRouter);

module.exports = app;