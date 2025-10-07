const express = require("express");
const bodyParser = require("body-parser");
const { logging } = require("./middleware");
const { userRouter } = require("./routes");
const { initializeBD } = require("./config/dbConfig");

const PORT = 8080;

const app = express();

app.use(bodyParser.json());
app.use(logging);

app.use("/user", userRouter);

(async () => {
   initializeBD();
  app.listen(PORT, () => {
    console.log(`Hello world! Este es nuestro primer server. Escuchando peticiones en el puerto: ${PORT}`);
  });
})();
