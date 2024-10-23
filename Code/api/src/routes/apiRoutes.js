// Importa o módulo Router do express
// Router será  utiliziado para definir rotas específicas da aplicação
const router = require('express').Router();
const UserController = require("../controllers/UserController")
router.post('/user', UserController.createUser)
router.post('/userLogin', UserController.loginUser)
router.put('/user', UserController.updateUser);
module.exports = router