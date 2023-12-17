// src/utils/validate.ts
import  Joi, { Schema, ValidationResult } from 'joi';

export const userSchema: Schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export function validateUser(user: any): ValidationResult {
    return userSchema.validate(user);
}