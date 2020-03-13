const {Router} = require('express');
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

const routes = new Router();

routes.get('/user',UserController.get);
routes.get('/user/:id',UserController.getById);
routes.post('/user/login',UserController.login);
routes.post('/user',UserController.post);
routes.put('/user',UserController.put);
routes.delete('/user/:id',UserController.delete);
routes.post('/authenticate',AuthController.authenticate);


module.exports = routes;