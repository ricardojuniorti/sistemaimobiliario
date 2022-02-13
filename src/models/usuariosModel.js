const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    
    nome: {
        type: String,
        required: true['Informe o campo nome']
    },
    endereco: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: false
    },
    profissao: {
        type: String,
        required: true
    },
    perfilusuario: {
        type: mongoose.ObjectId,
        ref: 'perfil_usuarios', // nomde da coleção referenciada
        required: true
    },
    login: {
        type: String,
        required: false
    },
    senha: {
        type: String,
        required: false
    },
    // campos padroes de todas as tabelas
    dataCriacao: {
        type: Date,
        default: Date.now(),
    },
    dataAtualizacao: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = Usuarios = mongoose.model("usuarios", sistemaImobiliarioSchema);