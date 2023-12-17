"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/users.ts
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const validate_1 = require("../utils/validate");
const auth_1 = require("../utils/auth");
const router = (0, express_1.Router)();
router.post('/', auth_1.authenticate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validation = (0, validate_1.validateUser)(req.body);
    if (validation.error) {
        return res.status(400).send(validation.error.details[0].message);
    }
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const user = userRepository.create(req.body);
    yield userRepository.save(user);
    res.send(user);
}));
// Similar routes for GET, PUT, DELETE...
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const user = yield userRepository.findOne({ where: { email: req.body.email } });
    if (!user || user.password !== req.body.password) {
        return res.status(400).send('Invalid email or password.');
    }
    const token = (0, auth_1.generateToken)(user.id);
    res.send(token);
}));
exports.default = router;
