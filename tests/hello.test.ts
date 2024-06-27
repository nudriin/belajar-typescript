import { sayHello } from "../src/say-hello";
describe('hello', () => {
    it("should say hello", () => {
        const name = "Nurdin";
        expect(name).toBe("Nurdin");
    });
});