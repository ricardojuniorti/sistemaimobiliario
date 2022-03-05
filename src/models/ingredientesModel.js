const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sistemaImobiliarioSchema = Schema({

    paes: [
        {
            id: Number,
            tipo: String
        }    
    ],
    carnes: [
        {
            id: Number,
            tipo: String
        }
        
    ],
    opcionais: [
        {
            id: Number,
            tipo: String
        }
    ]
      
});

module.exports = Ingredientes = mongoose.model("ingredientes", sistemaImobiliarioSchema);