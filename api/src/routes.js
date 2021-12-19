const { Router } = require("express");

const gitController = require('./controllers/GitController')

const routes = new Router;

routes.get(
  "/",
  (req, res) => {
    res.status(200).send({ message: 'Take api' })
  }
);

routes.get(
  "/git",
  gitController.getRepoAction
);

module.exports = routes;