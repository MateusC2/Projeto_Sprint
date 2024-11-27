const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");
const SalaController = require("../controllers/SalaController"); // Adicione esta linha

// Rotas do UserController
router.post('/user', UserController.createUser); // http://localhost:5000/api/v1/user
router.post('/userLogin', UserController.loginUser); // http://localhost:5000/api/v1/userLogin
router.put('/user', UserController.updateUser); // http://localhost:5000/api/v1/user
router.delete('/user/:id', UserController.deleteUser); // http://localhost:5000/api/v1/user/:id
router.get('/user', UserController.getAllUsers); // http://localhost:5000/api/v1/user

// Rotas do SalaController
router.get("/sala", SalaController.getAllSalas); // http://localhost:5000/api/v1/sala
router.post("/sala", SalaController.createSalas); // http://localhost:5000/api/v1/sala
router.put("/sala/:id_sala", SalaController.updateSala); // http://localhost:5000/api/v1/sala/:id
router.delete("/sala/:id", SalaController.deleteSala); // http://localhost:5000/api/v1/sala/:id

module.exports = router;
