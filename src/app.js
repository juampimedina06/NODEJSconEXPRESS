const express = require('express');
const port = 8080;
const bodyParser = require('body-parser');
const { logging } = require('./middleware');
const { userRouter } = require('./routes')
const app = express();

app.use(bodyParser.json());
app.use(logging);

app.use('/user', userRouter)

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}!`))


//DESCARGUE body-parser (sirve para decirme que es lo que viene en el cuerpo de la peticion)