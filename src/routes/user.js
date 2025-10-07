const express = require('express');
const  userService  = require('../services/user');
const router = express.Router();

router.get('/:userId', async (req, res ) =>{
    const userId = req.params.userId;
    try {
        const user = await userService.getUser(userId);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async (req, res ) =>{
    const {nombre, email} = req.query; 
    try {
        const user = await userService.getUsers({nombre, email});
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }  
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

router.put('/:userId', async (req, res ) =>{
    const userId = req.params.userId;
   const { nombre, apellido, email, password } = req.body;
    try {
        const newUser = await userService.updateUser(userId, { nombre, apellido, email, password });
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:userId', async (req, res ) =>{
    const userId = req.params.userId;
    try {
        const user = await userService.deleteUser(userId);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;