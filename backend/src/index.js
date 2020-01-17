//|------------------ IMPORTAÇÕES --------------------|//

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//|------------------ INICIANDO APLICAÇÃO --------------------|//

// INICIANDO EXPRESS
const app = express();

// INICIANDO BANCO DE DADOS MONGODB-ATHAS
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ohjf1.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//SETANDO JSON NO EXPRESS
app.use(cors());
app.use(express.json());
app.use(routes);

//SETANDO PORTA PARA ESCUTA DO EXPRESS
app.listen(3333);