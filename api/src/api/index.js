const express = require("express");
const router = express.Router();
const { storage } = require("../lib/storage");

const {
  session: { loadSessionUser, session },
  secure: { isAuthenticated },
  cors, errors
} = require("./middlewares");

const users = require("./controllers/users.controller");
const travels = require("./controllers/travels.controller");
const sessions = require("./controllers/sessions.controller");
const follows = require("./controllers/follows.controller");

// MIDDLEWARES
router.use(cors);
router.use(session);
router.use(loadSessionUser);

// SESSIONS CRUD
router.post("/sessions", sessions.create);
router.delete("/sessions", sessions.delete);

// USERS CRUD
router.post("/users", storage.single("avatar"), users.create); // CREATE
router.get("/users", isAuthenticated, users.list); // READ
router.get("/users/:id", isAuthenticated, users.detail); // READ
router.patch("/users/:id", isAuthenticated, storage.single("avatar"), users.update); // UPDATE
router.delete("/users/:id", isAuthenticated, users.delete); // DELETE

// USER TRAVELS CRUD
router.post("/travels", isAuthenticated, travels.create); // CREATE
router.get("/travels", isAuthenticated, travels.list); // READ
router.get("/travels/:id", isAuthenticated, travels.detail); // READ
router.patch("/travels/:id", isAuthenticated, travels.update); // UPDATE
router.delete("/travels/:id", isAuthenticated, travels.delete); // DELETE

//FOLLOW
router.post("/travels/:id/follows", isAuthenticated, follows.create); // CREATE
router.get("/travels/:id/follows", isAuthenticated, follows.list); // READ
router.delete("/travels/:id/follows/:followId", isAuthenticated, follows.delete); // DELETE


router.use(errors.routeNotFound);
router.use(errors.globalErrorHandler);

module.exports = router;
