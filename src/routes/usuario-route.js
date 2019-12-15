'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario-controller')
const CuponsControllers = require('../controllers/CuponsControllers')


router.get('/',controller.get)
router.get('/:id',controller.getById)
router.post('/', controller.post), 
router.post("/:id/cupons", CuponsControllers.Gerarcupons)
router.put("/:id", controller.put)
router.delete('/', controller.delete), 


    
module.exports = router;