const express = require('express');
const Prof = require('../models/model_prof');
const router = express.Router();

router.post ('/prof', async(req, res) =>{

    try{
        const novoProf = new Prof({
            name: req.body.name,
            idade: req.body.idade,
            materia: req.body.materia
        });

        await novoProf.save();
        res.status(201).json(novoProf);
    } catch(error){
        console.error(error);
        res.status(501).json({ message: 'erro ao inserir aluno'});
    }
});

router.get ('/prof', async(req, res) =>{
    try{
        const profs = await Prof.find();
        res.status(200).json(profs);
    }catch (error){
        console.error('erro ao buscar professor', error);
        res.status(500).json({ message: 'erro ao buscar professor'})
    }
});

module.exports = router;

