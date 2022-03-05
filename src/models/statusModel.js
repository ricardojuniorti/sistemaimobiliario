const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({
    
    id: {
        type: String,
        required: false
    },
    tipo: {
        type: String,
        required: false
    }
});

module.exports = Status = mongoose.model("status", sistemaImobiliarioSchema);