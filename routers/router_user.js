const express = require('express');
const User = require('../models/model_user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post ('/register', async(req, res) =>{

    try{
        const {username, email, password} = req.body;

        const usurexitente  = await User.findOne({ email });
        if (usurexitente) {
            return res.status(400).json({message: 'Usuario ja exite!'});
        }

        const novoUser = new User({ username, email, password});
        await novoUser.save();

        res.status(201).json({message: 'Usuario registrado com sucesso!'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post ('/login', async(req, res) =>{
    try {
        const {email, password} = req.body;

        const user = User.findOne({ email });
        if(!user){
            return res.status(400).json({message: 'informações invaldas!'});
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return res.status(400).json({message: 'senha incorreta!'});
        }

        const token = jwt.sign({ id: user._id},  process.env.SECREY_KEY, {
            expiresIn: '1h',
        });

        res.json({message: 'login bem sicedido', token});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;