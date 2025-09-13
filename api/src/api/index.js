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
router.post("/users", storage.single("avatar"), users.create);
router.get("/users", isAuthenticated, users.list);
router.get("/users/:id", isAuthenticated, users.detail);
router.patch("/users/:id", isAuthenticated, storage.single("avatar"), users.update);
router.delete("/users/:id", isAuthenticated, users.delete);

// USER TRAVELS CRUD
router.post("/travels", isAuthenticated, travels.create);
router.get("/travels", isAuthenticated, travels.list);
router.get("/travels/:id", isAuthenticated, travels.detail);
router.patch("/travels/:id", isAuthenticated, travels.update);
router.delete("/travels/:id", isAuthenticated, travels.delete);

//FOLLOW
router.post("/travels/:id/follows", isAuthenticated, follows.create); 
router.get("/travels/:id/follows", isAuthenticated, follows.list);
router.delete("/travels/:id/follows/:followId", isAuthenticated, follows.delete); 


router.use(errors.routeNotFound);
router.use(errors.globalErrorHandler);

module.exports = router;
