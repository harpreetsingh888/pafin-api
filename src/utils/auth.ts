// src/utils/auth.ts
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export function generateToken(id: string): string {
  return jwt.sign({ id }, 'secret');
}

export function authenticate(req: Request & { user?: any }, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined  {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const payload = jwt.verify(token, 'secret');
    req.user = payload;
    next();
  } catch (ex) {
    return res.status(400).send('Invalid token.');
  }
}