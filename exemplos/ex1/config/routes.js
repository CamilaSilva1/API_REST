// Created by Camila Silva
// Since 07/07/2022
// This script is responsable to manager the routes of the api

// importing packages
const express = require('express');
const routes = express.Router();

// creating database
let db = [
    {"nome": "Felipe", "valor": 520},
    {"nome": "Emily", "valor": 480},
    {"nome": "Ross", "valor": 250},
    {"nome": "Monica", "valor": 780},
];

// creating endpoints
routes.get("/", (req, resp) =>{

    // returning the database created like a responser in json
    return resp.json(db);
})

// post
routes.post("/insertUser", (req, resp) => {

    // creating body to store the inserted datas
    const body = req.body;

    // if it happens some error
    // if the body is empty, send a error 404 to the user
    if(!body){
        return resp.status(404).end();
    }

    // adding the data into database
    db.push(body);

    // return the responser 
    return resp.json(body);
})