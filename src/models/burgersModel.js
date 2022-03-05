const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    id: {
        type: Number,
        required: false
    },
    nome: {
        type: String,
        required: false
    },
    carne: {
        type: String,
        required: false
    },
    pao: {
        type: String,
        required: false
    },
    opcionais: { type: String, required: false, uppercase: true,
        enum: ['BACON', 'CHEDDAR', 'CEBOLA ROXA'] },
    status: {
        type: String,
        required: false
    }
  
});

module.exports = Burgers = mongoose.model("burgers", sistemaImobiliarioSchema);