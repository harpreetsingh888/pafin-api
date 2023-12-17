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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const userService_1 = require("./services/userService"); // import your UserService
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
let connection;
let userService; // declare your UserService
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, typeorm_1.createConnection)({
            type: "postgres",
            host: 'localhost',
            port: 5432,
            username: 'harpreet',
            password: 'singh888',
            database: 'pafin',
            entities: [
                "src/entities/**/*.ts"
            ],
            synchronize: true,
        });
        console.log('Connected to PostgreSQL database');
        // instantiate user service
        userService = new userService_1.UserService();
    }
    catch (err) {
        console.error('Error connecting to PostgreSQL database', err);
        process.exit(1);
    }
});
// Connect to the database during server startup
connectToDatabase().then(() => {
    // only start your server after the database connection has been established
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
exports.default = app;
