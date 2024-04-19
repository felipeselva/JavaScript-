const fs = require('fs').promises;

module.exports = (caminho,dados) => fs.readFile(caminho, 'utf8');
