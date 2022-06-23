// Criado por Camila Silva
// Desde 23/06/2022
// Criando uma API Rest com Node.js e MongoDB

// Criando tabelas no banco de dados criado no mongoose

const mongoose = require('mongoose');

// criando tabela Persons
const Person = mongoose.model('Person', {
    name: String, 
    salary: Number,
    approved: Boolean,
})

// exportando a tabela criada
module.exports = Person;
