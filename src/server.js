//Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node> Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar "view engines" para inserir dados nos templates.
// Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta. Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.
const express = require('express'); 
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;