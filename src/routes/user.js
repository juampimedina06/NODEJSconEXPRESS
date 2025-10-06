const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    res.send({name, email, password : "****"})
    // res.send(`Los datos que enviaste son ${name} y ${email} y al contraseña es ${password}`)    
})

router.get('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send({ userId })
})

router.get('/', (req, res ) =>{
    const name = req.query.name;    
    res.send({ name })
})

router.put('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    const { name, email, password } = req.body;

    res.send({id: userId, name,email, password : "****"})
})

router.delete('/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send(`Adios usuario: ${userId}`)
})

module.exports = router;