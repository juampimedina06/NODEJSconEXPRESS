console.log("Espero ser crack en nodeJS")

//?CLASE DE COMO CREAR UN SERVIDOR

// const fs = require('fs')

// fs.readFile('archivo1.txt', 'utf8', (error, data) => {
//     if(error) throw error;
//     fs.writeFile('archivo2.txt', data ,(err) => {
//         if(err) throw err;
//         console.log("Se a guardado el archivo correctamente")
//     })
// })

//CLASE DE HTTP

//? const http = require('http');

// http
//   .createServer((req, res) =>{
//   res.writeHead(200,{"Context-type" : "text/html"});
//   if(req.url === '/hello'){
//     res.write("<h1>Hola esta es la pagina HELLOOOOoOOo ;D</h1>")
//   }else{
//     res.write("<h1>Bienvenido a mi sitio web!</h1>");
//   }
//   res.end();
//   })
//   .listen(8080)

const express = require('express');
const port = 8080;
const bodyParser = require('body-parser');

const app = express();

const myMdw = (req, res, next) =>{ 
    console.log(`Se hizo un request a la URL: ${req.url}`)
    res.header('Context-type', 'application/json')
    next();
}

app.use(bodyParser.json());
app.use(myMdw);



// app.get('/', (req, res) => res.send('Esta andando el serivor!'))
app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}!`))

// app.get('/user/:name', (req, res ) =>{
//     const name = req.params.name;
//     res.header('Context-type', 'text/html')
//     res.send(`<h1>Bienvenido ${name} al mejor servidor del mundo</h1>`)
// })

app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    res.send({name, email, password : "****"})
    // res.send(`Los datos que enviaste son ${name} y ${email} y al contraseña es ${password}`)    
})

app.get('/user/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send({ userId })
})

app.get('/user', (req, res ) =>{
    const name = req.query.name;    res.send({ name })
})

app.put('/user/:userId', (req, res ) =>{
    const userId = req.params.userId;
    const { name, email, password } = req.body;

    res.send({id: userId, name,email, password : "****"})
})

app.delete('/user/:userId', (req, res ) =>{
    const userId = req.params.userId;
    res.send(`Adios usuario: ${userId}`)
})



//DESCARGUE body-parser (sirve para decirme que es lo que viene en el cuerpo de la peticion)