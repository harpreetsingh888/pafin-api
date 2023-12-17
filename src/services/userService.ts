// src/services/userService.ts
import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class UserService {
    private userRepository = getRepository(User);

    async createUser(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        return await this.userRepository.save(user);
    }

    async getUserById(userId: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { id: userId } });
    }

    async updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
        await this.userRepository.update(userId, userData);
        return await this.userRepository.findOne({ where: { id: userId } });
    }

    async deleteUser(userId: string): Promise<void> {
        await this.userRepository.delete(userId);
    }
}
