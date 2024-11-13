const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    idade:{
        type: Number,
        require: true
    },
    nacionalidade:{
        type: String,
        require: true
    },
})

const Aluno = mongoose.model('Aluno', alunoSchema);

module.exports = Aluno;