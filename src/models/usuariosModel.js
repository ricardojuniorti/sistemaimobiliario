const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    nome: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: false,
    },
    telefone: {
        type: String,
        require: false,
    },
    profissao: {
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

module.exports = usuariosColecao = mongoose.model("usuarios", sistemaImobiliarioSchema);