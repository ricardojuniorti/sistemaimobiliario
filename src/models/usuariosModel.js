const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    
    nome: {
        type: String,
        require: true['Informe o campo nome']
    },
    endereco: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    cpf: {
        type: String,
        require: false
    },
    profissao: {
        type: String,
        require: true
    },
    perfilusuario: {
        type: mongoose.ObjectId,
        ref: 'perfil_usuarios', // nomde da coleção referenciada
        require: true
    },
    login: {
        type: String,
        require: false
    },
    senha: {
        type: String,
        require: false
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