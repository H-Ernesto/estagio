const mongoose = require('mongoose');

const profSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    idade:{
        type: Number,
        require: true
    },
    materia:{
        type: String,
        require: true
    }
})

const Prof = mongoose.model('Prof', profSchema);

module.exports = Prof;