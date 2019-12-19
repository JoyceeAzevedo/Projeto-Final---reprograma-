'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller')


/**
 * @api {get} /usuarioRoute
 * @apiName GetUsuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} Retorna todos os usuarios cadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Teste",
 *   "cpf": 123456,
 *   "email": "teste@teste.com.br",
 *   "senha": "Teste",
 *   "cupom": "Teste",
 *   "pontos": "teste"
 *   }]
 * 
 */


router.get('/',controller.get)
router.get('/:id',controller.getById)


/**
 * @api {POST} /usuarioRoute
 * @apiName POST Usuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} Cadastra usuário e gera cupom de forma aleatória
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Teste",
 *   "cpf": 123456,
 *   "email": "teste@teste.com.br",
 *   "senha": "Teste",
 *   "cupom": "MELI2020REPRO",
 *   "pontos": "teste"
 *   }]
 * 
 */

router.post('/:id/cupons', controller.post), 


/**
 * @api {PUT} /usuarioRoute
 * @apiName POST Usuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} Atualiza informações dos usuários cadastrados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Teste",
 *   "cpf": 123456,
 *   "email": "teste@teste.com.br",
 *   "senha": "Teste",
 *   "cupom": "MELI2020REPRO",
 *   "pontos": "teste"
 *   }]
 * 
 */

router.put("/:id", controller.put)

router.post('/', controller.post), 


/**
 * @api {PUT} router.put("/:id", controller.put),
 * @apiName PUT Usuarios
 * @apiGroup Usuarios
 *
 *
 * @apiSuccess {Object[]} Atualiza informações do cupom caso usuário ja tenha cadastrado
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *   [{    
 *   "nome": "Teste",
 *   "cpf": 123456,
 *   "email": "teste@teste.com.br",
 *   "senha": "Teste",
 *   "cupom": "MELI2020REPRO",
 *   "pontos": "teste"
 *   }]
 * 
 */


router.delete('/', controller.delete), 



module.exports = router;