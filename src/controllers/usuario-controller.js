'use strict';

const mongoose = require('mongoose')
const Usuario = mongoose.model('Usuario')

exports.get = (req, res) => {
    Usuario.find(function (err, usuarios) {
      if (err) res.status(500).send(err);
      res.status(200).send(usuarios);
    })
  }
  

  exports.getById = (req, res) => {
    const usuarioId = req.params.id
    Usuario.findById(usuarioId, function (err, usuario) {
      if (err) return res.status(500).send(err);
  
      if (!usuario) {
        return res.status(200).send({ message: `Infelizmente não localizamos a usuario de id: ${usuarioId}` });
      }
  
      res.status(200).send(usuario);
    })
  }
  
exports.post = (req, res) => {
    console.log(req.body)
    let usuario = new Usuario(req.body);
    console.log(usuario)
  
    usuario.save(function (err) {
      if (err) res.status(500).send(err);
  
      res.status(201).send(usuario);
  
    })
    }
  

    exports.put = (req, res, next) => {  
    Usuario
    .findByIdAndUpdate(req.params.id, {

        $set:{
        usuario:req.body.title,    
        quantidadepontos: req.body.quantidadepontos
        }
    }

    )}
  
     exports.delete= (req, res, next) => {
          res.status(200).send(req.body);
          };   
 