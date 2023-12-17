"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.generateToken = void 0;
// src/utils/auth.ts
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(id) {
    return jsonwebtoken_1.default.sign({ id }, 'secret');
}
exports.generateToken = generateToken;
function authenticate(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, 'secret');
        req.user = payload;
        next();
    }
    catch (ex) {
        return res.status(400).send('Invalid token.');
    }
}
exports.authenticate = authenticate;
