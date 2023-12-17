// src/app.ts
import express from "express";
import { createConnection, Connection } from "typeorm";
import userRoutes from "./routes/userRoutes";
import { UserService } from "./services/userService"; // import your UserService

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let connection: Connection;
let userService: UserService; // declare your UserService

const connectToDatabase = async () => {
    try {
        await createConnection({
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
        userService = new UserService();
    } catch (err) {
        console.error('Error connecting to PostgreSQL database', err);
        process.exit(1);
    }
};

// Connect to the database during server startup
connectToDatabase().then(() => {
    // only start your server after the database connection has been established
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

export default app;
