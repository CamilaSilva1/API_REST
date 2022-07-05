// Criado por Camila Silva
// Desde 01/07/2022
// Primeira api rest criada em node.js e nodemon

// fazendo uma requisição aos pacotes instalados
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// importando arquivos
const routes = require('./config/routes.js');

// iniciando servidor
const app = express();

// adicionando e configurando os pacotes ao app criado
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.json());
app.use(cors());
app.use(routes);

// ligando o servidor
app.listen(21262, () => {
    console.log(`Express started at http://localhost:21262`)
})

