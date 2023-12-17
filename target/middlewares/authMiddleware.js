"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "pafin-api-key"; // Change this to a secure secret key
const authenticateJWT = (req, res, next) => {
    var _a;
    const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, user) => {
        if (err) {
            res.status(403).send("Forbidden");
            return;
        }
        // @ts-ignore
        req.user = user;
        next();
    });
};
exports.authenticateJWT = authenticateJWT;