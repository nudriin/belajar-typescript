describe("Array data types", (): void => {
    it("Array", (): void => {
        // * Membuat tipe data array
        // * Hanya bisa menampung Array
        const names: string[] = ["Nurdin", "Hishasy", "Sunny Summer"];
        const namess: object[] = [
            {
                name: "Nurdin",
                age: 20,
            },
            {
                name: "Hishasy",
                age: 20,
            },
        ];

        const numbers: number[] = [1, 2, 3, 4, 5];

        console.log(names);
        console.log(numbers);

        console.log(namess);
    });
});
