describe("Function in Interface", () => {
    it("Should create function in interface", () => {
        interface FunctionInInterface {
            name: string;
            sayHi(name: string): string;
        }

        const person: FunctionInInterface = {
            name: "Nurdin",
            sayHi: (name: string): string => {
                return `Hello ${name}`;
            },
        };

        console.log(person);
        console.log(person.sayHi("Nurdin"));
    });
});
