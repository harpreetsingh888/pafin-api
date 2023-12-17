"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router.post("/user", userController_1.createUser);
router.get("/user/:id", authMiddleware_1.authenticateJWT, userController_1.getUserById);
router.put("/user/update/:id", authMiddleware_1.authenticateJWT, userController_1.updateUser);
router.delete("/user/delete/:id", authMiddleware_1.authenticateJWT, userController_1.deleteUser);
exports.default = router;
