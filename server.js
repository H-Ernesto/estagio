const Aluno = require('./models/model_aluno');

const express = require('express');

const connectDB = require('./database');
const { Error } = require('mongoose');

const app = express();

const port = 6000;

connectDB();

app.use(express.json());

const alunos = require('./routers/router_aluno')
app.use('/api', alunos);

const profs = require('./routers/router_prof')
app.use('/api', profs);

const users = require('./routers/router_user');
app.use('/api', users);

app.listen(port, ()=>{
    console.log(`servidor rodando: ${port}`);
});