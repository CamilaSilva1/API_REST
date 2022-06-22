// Criado por Camila Silva
// Desde 21/06/2022
// Criando uma API Rest com Node.js e MongoDB

// Configuração inicial
// chamando os pacotes instalados
const express = require('express');

// criando uma variavel para executar o express e iniciar
const app =  express();

// lendo o json com middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

// rota inicial / criando endpoint
app.get('/', (req, resp) => {
    // mostrando a requisição
    resp.json({
        message: "Olá express"
    })
})

// entregando uma porta para o express disponibilizar o banco para ser 
// acessado

// deixando o express visivel para o navegador
app.listen(3000)
