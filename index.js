// Criado por Camila Silva
// Desde 21/06/2022
// Criando uma API Rest com Node.js e MongoDB

// Configuração inicial
// chamando os pacotes instalados
const express = require('express');
const mongoose = require('mongoose');

// criando uma variavel para executar o express e iniciar
const app =  express();

// importando a tabela criada em um arquivo externo
const Person = require('./models/Person');


// variaveis para guardar senha e username
const db_user = 'Camila';
const db_password = encodeURIComponent('pO7Wxeayax1236kj');

// lendo o json com middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json());

// criando as rotas da api
app.post('/person', async(req, resp) =>{
    // req body

    // {name, salary, approved}
    const {name, salary, approved} = req.body;

    const person = {
        name,
        salary,
        approved,
    }

    // criando os dados no banco de dados e resgatando possiveis erros
    try{

        // esperando a requisição acabar e criando dados
        await Person.create(person);

        // enviando msg de sucesso em json
        resp.status(201).json({
            message: "Usuário inserido no banco de dados com sucesso!"
        })

    }catch(error){
        // erro de servidor e mandando a msg de erro em json para a aplicação
        resp.status(500).json({
            error: error
        })
    }
})

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

// conectando com o banco de dados criado no mongoose
mongoose.connect(
    `mongodb+srv://${db_user}:${db_password}@apicuster.5izg6.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        // se caso der certo a conexao
        console.log("Conectado ao MongoDB");
        app.listen(3000);
    })
    .catch((err) => console.log(err))

