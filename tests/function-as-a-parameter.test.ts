describe("Function as a parameter", () => {
    it("should support function as a parameter", () => {
        // Membuat sebuah function dengan parameter yang berupa function
        //  ketika membuat parameternya, maka kita perlu menyebutkan paramternyaa
        const sayHello = (name: string, func: (name: string) => string) => {
            return `Hello ${func(name)}`;
        };

        // function yang nanti nya akan di isi sebagai parameter
        const toUpper = (name: string): string => {
            return name.toLocaleUpperCase();
        };

        console.log(sayHello("Nurdin", toUpper));
        expect(sayHello("Nurdin", toUpper)).toBe("Hello NURDIN");

        // Bisa juga langsung kita inputkan kedalam functionnya
        console.log(
            sayHello("Nurdin", (name: string): string => {
                return name.toLocaleUpperCase();
            })
        );
    });
});
