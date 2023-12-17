// src/routes/userRoutes.ts
import express, { Request, Response, NextFunction } from "express";
import { createUser, getUserById, updateUser, deleteUser } from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", authenticateJWT, getUserById);
router.put("/:id", authenticateJWT, updateUser);
router.delete("/:id", authenticateJWT, deleteUser);

export default router;