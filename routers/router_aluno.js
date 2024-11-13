const express = require('express');
const Aluno = require('../models/model_aluno');
const router = express.Router();

router.post ('/aluno', async(req, res) =>{
       
    try{
        const novoAluno = new Aluno({
            name: req.body.name,
            idade: req.body.idade,
            nacionalidade: req.body.nacionalidade
        });

        await novoAluno.save();
        res.status(201).json(novoAluno);
    } catch(error){
        console.error(error);
        res.status(501).json({ message: 'erro ao inserir aluno'});            
    }  

});

router.get ('/aluno', async(req, res) =>{
    try{
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
    } catch (error){
        console.error('erro ao buscar aluno', error);
        res.status(500).json({ message: 'erro ao buscar aluno'})
    }  
});

router.put ('/aluno/:id', async(req, res) =>{
    const{id} = req.params;
    const {
        name,
        idade,
        nacionalidade
     } = req.body;

    try{
        const updateAluno = await Aluno.findByIdAndUpdate(id,{
            name,
            idade,
            nacionalidade
        },{new: true});
        if(!updateAluno){
            return res.status(404).json({ message: 'ususario não encontrado'})
        }

        res.status(200).json(updateAluno)
    } catch(error){
        console.error('erro ao atualizar aluno',error);
        res.status(500).json({message: 'erro ao atualizar aluno'})
    }
});

router.delete ('/aluno/:id', async(req, res) =>{
    try{
        const deleteAluno = await Aluno.findByIdAndDelete(req.params.id);
        if(!deleteAluno)
            return res.status(404).json({message: 'usuario não encontrado!'});
        res.status(200).json({message: 'usuario deletado!'});
    }catch(error){
        res.status(500).json({message: error.message})
    }

});


module.exports = router;