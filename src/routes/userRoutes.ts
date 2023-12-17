// src/routes/userRoutes.ts
import express, { Request, Response, NextFunction } from "express";
import { createUser, getUserById, updateUser, deleteUser } from "../controllers/userController";
import { authenticateJWT, generateToken } from "../middlewares/authMiddleware";

const router = express.Router();

// User routes
router.post("/user", createUser);
router.get("/user/:id", authenticateJWT, getUserById);
router.put("/user/update/:id", authenticateJWT, updateUser);
router.delete("/user/delete/:id", authenticateJWT, deleteUser);

// token route
router.get("/token", generateToken)

export default router;