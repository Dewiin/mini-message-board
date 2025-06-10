const { Router } = require("express");
const usersRouter = Router();

const usersController = require("../controllers/usersController");

usersRouter.get('/', usersController.usersListGet);
usersRouter.get('/new', usersController.usersCreateGet);
usersRouter.post('/new', usersController.usersCreatePost);
usersRouter.get('/open/:id', usersController.usersOpenGet);
