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
exports.UserService = void 0;
// src/services/userService.ts
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
class UserService {
    constructor() {
        this.userRepository = (0, typeorm_1.getRepository)(User_1.User);
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.userRepository.create(userData);
            return yield this.userRepository.save(user);
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({ where: { id: userId } });
        });
    }
    updateUser(userId, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.update(userId, userData);
            return yield this.userRepository.findOne({ where: { id: userId } });
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userRepository.delete(userId);
        });
    }
}
exports.UserService = UserService;
