// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ParamsDictionary } from "express-serve-static-core";

const secretKey = "pafin-api-key";

export const generateToken = (id: string): string => {
    return jwt.sign({ id }, secretKey);
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        res.status(401).send("Unauthorized");
        return;
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            res.status(403).send("Forbidden");
            return;
        }
        // @ts-ignore
        req.user = user;
        next();
    });
};
