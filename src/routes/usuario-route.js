'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller')
const CuponsControllers = require('../controllers/CuponsControllers')

/**
 * @api {get} /usuarioRoute
 * @apiName GetUsuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} Retorna cadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nomeEstabelecimento": "Teste",
 *   "cnpj": 123456,
 *   "categoria": "Teste",
 *   "tipoNegocio": "Teste",
 *   "email": "Teste",
 *   "endereco": "Teste",
 *   "numero": "Teste",
 *   "bairro": "teste",
 *   "cidade": "Teste",
 *   "uf": "Teste",
 *   "cep": 0800,
 *   "diasAtendimento": "Teste",
 *   "horariosAtendimento": "Teste"
 *   "telefone": "teste",
 *   "delivery": "teste"
 *   }]
 * 
 */


router.get('/',controller.get)
router.get('/:id',controller.getById)
router.post('/', controller.post), 
router.post("/:id/cupons", CuponsControllers.Gerarcupons)
router.put("/:id", controller.put)
router.delete('/', controller.delete), 


    
module.exports = router;