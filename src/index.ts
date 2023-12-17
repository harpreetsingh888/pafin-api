// src/app.ts
import express from "express";
import { createConnection } from "typeorm";
import "reflect-metadata";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);
debugger;
createConnection()
    .then(() => {
        debugger;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        debugger;
        console.log("TypeORM connection error: ", error)
    });

export default app;
