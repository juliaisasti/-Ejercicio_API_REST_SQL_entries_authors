const express = require('express');
// Rutas de productos
const authorsApiController = require("../controllers/authorsAPI.controller");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/', authorsApiController.getAuthors);
authorsApiRouter.post('/', authorsApiController.createAuthor);

module.exports = authorsApiRouter;

