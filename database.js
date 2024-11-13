const Aluno = require('./models/model_aluno');

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/database_escola')
    } catch{}
}

module.exports = connectDB;