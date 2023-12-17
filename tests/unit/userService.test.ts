// tests/unit/userService.test.ts
import { UserService } from "../../src/services/userService";

describe("UserService", () => {
    const userService = new UserService();

    it("should create a new user", async () => {
        const userData = { name: "John Doe", email: "john.doe@example.com", password: "password" };
        const user = await userService.createUser(userData);
        expect(user).toHaveProperty("id");
        expect(user!.name).toBe(userData.name);
        expect(user!.email).toBe(userData.email);
        expect(user!.password).not.toBe(userData.password); // Password should be hashed
    });

    it("should get a user by id", async () => {
        const userData = { name: "Jane Doe", email: "jane.doe@example.com", password: "password" };
        const newUser = await userService.createUser(userData);
        const user = await userService.getUserById(newUser.id);
        expect(user).toBeDefined();
        expect(user!.id).toBe(newUser.id);
        expect(user!.name).toBe(userData.name);
        expect(user!.email).toBe(userData.email);
        expect(user!.password).not.toBe(userData.password);
    });

    // Add more tests for updateUser, deleteUser, and other scenarios
});
