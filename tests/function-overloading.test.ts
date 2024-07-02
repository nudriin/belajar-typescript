describe("Function overloading", () => {
    it("should support function overloading", () => {
        // untuk membuat function overloading, kita haruslah membuat template untuk functionnya
        //  baru kemudian kita buat implementasinya
        // berikut ini adalah deklarasinya
        function functionOverloading(value: number): number;
        function functionOverloading(value: string): string;

        // Berikut ini adalah implementasinya
        function functionOverloading(value: any) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 20;
            }
        }

        console.log(functionOverloading(10));
        console.log(functionOverloading("Nurdin"));

        expect(functionOverloading(10)).toBe(200);
        expect(functionOverloading("Nurdin")).toBe("NURDIN");
    });
});
