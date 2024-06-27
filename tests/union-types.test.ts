describe('Union', () => {
    it('Union type', (): void => {
        // Deklarasi tipe data union, tipe data hanya bisa diubah berdasarkan yang sudah ditentukan saja
        let dataUnion: string | number | boolean;

        // * AMAN
        dataUnion = "nurdin" // tidak error
        dataUnion = 20 // tidak error
        dataUnion = true // tidak error
        
        //! Akan error karena array dan object di deklarasikan
        // dataUnion = [] //! error
        // dataUnion = {} //! error

        console.log(dataUnion);
    });
    it('should support typeof operator', (): void => {
        const proccess = (value: string | boolean | number) => {
            if(typeof value === "string"){
                return value.toUpperCase();
            } else if(typeof value === "number"){
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(proccess("nurdin")).toBe("NURDIN");
        expect(proccess(10)).toBe(12);
        expect(proccess(true)).toBe(false);
    });
});