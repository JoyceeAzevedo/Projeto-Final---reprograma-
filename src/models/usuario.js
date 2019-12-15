  
const mongoose = require ('mongoose');



const SchemaUsuario = new mongoose.Schema({

    name:{type:String, required: true },
    cpf:{type:String, required: true },
    email:{type:String, required: true },
    senha:{type:String, required: true },
    quantidadeitemdescart:{type:String},
    quantidadepontos:{type:Number},
    numcupom: [Number]
    
});


module.exports = mongoose.model('Usuario',SchemaUsuario)
