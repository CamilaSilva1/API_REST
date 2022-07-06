// Criado por Camila Silva
// Desde 05/07/2022
// Este script é responsável por gerenciar as rotas da aplicação

// importando pacotes
const express = require('express');
const routes = express.Router();

// criando banco de dados
let db = [
    { '1': { nome: 'Cliente 1', idade: '20' } },
    { '2': { nome: 'Cliente 2', idade: '23' } },
    { '3': { nome: 'Cliente 3', idade: '14' } }
]

// criando endpoints

// obtendo os dados do banco
routes.get('/', (req, resp) => {

    // retornando uma resposta para a requisição no endpoint criado
    return resp.json(db);
})

// inserindo dados no banco
routes.post('/insertUser', (req, resp) => {

    // retornando uma resposta para a requisição no endpoint criado

    // criando uma variavel body para armazenar todos os dados do banco
    const body = req.body;

    // se o body estiver vazio enviar uma resposta 400 para o usuario
    if(!body){
        return resp.status(400).end();
    }

    // adicionando dados dentro do array no body 
    db.push(body);

    // retornando o body como uma resposta json
    return resp.json(body);

})

// deletando dados 
routes.delete('/:id', (req, resp) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })

    db = newDB;
    
    return resp.send(newDB);
})

// exportando o modulo importado express
module.exports = routes;