import { sayHello } from "../src/say-hello";

describe("Say Hello", (): void => {
    it("Should say hello", (): void => {
        const message = "Hello Nurdin";
        const response = sayHello("Nurdin");

        expect(response).toBe(message);
    });
});
