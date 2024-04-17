/*const mod1 = require('./mode1');
const {nome, sobrenome, falaNome} = require('./mode1');

console.log(falaNome());

*/


const path = require('path')
const axios = require('axios')

const {Pessoa} = require('./mode1');
const p1 = new Pessoa ('Felipe');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch( e => console.log(e));