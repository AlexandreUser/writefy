const express = require("express");
const routes = express.Router();
const { get } = require("./controller/main.controller");
const userController = require("./controller/credentials.controller");

routes.get("/api/v1/main", get);

routes.get("/api/v1/user", userController.get);
routes.post("/api/v1/user", userController.post);
routes.put("/api/v1/user", userController.put);
routes.delete("/api/v1/user", userController.delete);
routes.post("/api/v1/user/books", userController.post_book);
routes.put("/api/v1/user/books", userController.update_book);
routes.post("/api/v1/login", userController.login);
module.exports = routes;
