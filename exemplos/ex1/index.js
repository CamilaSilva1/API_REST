// Created by Camila Silva
// Since 06/07/2022
// Creating an api rest with nodemon and express

// importing pacotes
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// starting server
const app = express();

// adding and configuring the imported packages to the aplication
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors());

// turning on the server
app.listen(3000, () => {

    console.log("Servidor ligado na porta http://localhost:3000");

}) 