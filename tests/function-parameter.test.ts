describe("Function Parameter", () => {
    it("should support function parameter", () => {
        const functionWithTwoParam = (name: string, age: number): void => {
            console.log(`Name: ${name}`);
            console.log(`Age: ${age}`);
        };

        functionWithTwoParam("Nurdin", 20);

        const withDefault = (name: string = "Guest"): string => {
            return `Hello ${name}`;
        };

        expect(withDefault("Nurdin")).toBe("Hello Nurdin");
        // Boleh dilakukan karena pada prameter memiliki default value berupa guest
        // jadi parameternya boleh tidak di isi, sedangkan apabila tidak memiliki default value
        // maka akan terjadi error, karena pada typescript parameter bersifat wajib
        expect(withDefault()).toBe("Hello Guest");
    });

    it("should support rest parameter", () => {
        const restParam = (...values: number[]): number => {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total;
        };

        expect(restParam(1, 2, 3, 4, 5)).toBe(15);
        console.log(restParam(1, 2, 3, 4, 5, 6, 7, 78, 89));
    });

    it("should support optional parameter", () => {
        const optionalParam = (name: string, age?: number): string => {
            return `Name: ${name}\nAge: ${age ? age : `Unknown`}`;
        };

        console.log(optionalParam("Nurdin")); // * bisa cuman 1 paramter saja karena parameter age adalah optional
        console.log(optionalParam("Nurdin", 20)); // * bisa dua
    });
});
