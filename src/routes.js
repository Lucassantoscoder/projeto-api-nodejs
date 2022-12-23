//  http://localhost:3333/users

const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/health', (req, res)  => {
  return res.send({ message: "Servidor está tudo Ok, pode começar!"})
}); //  http://localhost:3333/health , checagem de api


routes.post('/users', UserController.insertUser);

routes.get('/users', UserController.selectUsers);

module.exports = routes;