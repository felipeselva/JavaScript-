const { Router } = require('express');
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')


//ROTAS DA HOME
route.get('/', homeController.paginaInicial );
route.post('/', homeController.trataPost);

//ROTAS DE CONTATO

route.get('/contato', contatoController.paginaInicial);





module.exports = route;