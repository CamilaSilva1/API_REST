// Criado por Camila Silva
// Desde 01/07/2022
// Primeira api rest criada em node.js e nodemon

// fazendo uma requisição aos pacotes instalados
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// iniciando servidor
const app = express();

// adicionando e configurando os pacotes ao app criado
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.json());

app.use(cors());