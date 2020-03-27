const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Permite a comunicação entre o back-end configurado
app.use(cors());

// Isso está falando para o app que os dados irão ser em formato json
app.use(express.json());

//Importando a variavel "routes"
app.use(routes);

app.listen(3333);