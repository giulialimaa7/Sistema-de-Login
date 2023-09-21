import express from 'express';
import userApi from './controllers/UserController.js';

const UserController = userApi();
const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/validate", UserController.validateToken);
router.post("/register", UserController.insertUser)

router.get("/users", UserController.allUsers);

export default router;
