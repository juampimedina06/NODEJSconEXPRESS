const express = require('express');
const  userService  = require('../services/user');
const router = express.Router();

router.get('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send({ userId })
})

router.get('/', (req, res ) =>{
    const {name, email} = req.query;    
    res.send({ name, email })
})

router.post('/', async (req, res) => {
    const { nombre, apellido, email, password } = req.body;
    try {
        const newUser = await userService.createUser({
            nombre, 
            apellido, 
            email, 
            password
        });
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    const { name, email, password } = req.body;

    res.send({id: userId, name,email, password : "****"})
})

router.delete('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send(`El usuario con el id: ${userId} fue eliminado correctamente`)
})

module.exports = router;