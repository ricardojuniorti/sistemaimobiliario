const express = require('express');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })    
);

const indexRouter = require("./routers/index");
const usuarioRouter = require("./routers/usuarios");
const perfil_usuarioRouter = require("./routers/perfil_usuarios");
const ingredientesRouter = require("./routers/ingredientes");
const statusRouter = require("./routers/status");

// chamando a index
app.use("/sistema_imobiliario", indexRouter);

// rota para tela de usuarios
app.use("/sistema_imobiliario/usuarios", usuarioRouter);
// rota para tela de perfil de usuarios
app.use("/sistema_imobiliario/perfil_usuarios", perfil_usuarioRouter);
// rota para tela de ingredientes
app.use("/sistema_imobiliario/ingredientes", ingredientesRouter);
// rota para tela de status do pedido
app.use("/sistema_imobiliario/status", statusRouter);

module.exports = app;