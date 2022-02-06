const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    descricao: {
        type: String,
        require: true,
    },
    // campos padroes de todas as tabelas
    dataCriacao: {
        type: Date,
        default: Date.now(),
    },
    dataAtualizacao: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = perfil_usuarioColecao = mongoose.model("perfil_usuarios", sistemaImobiliarioSchema);