describe('Object', () => {
    it('should object types', () => {

        // Langsung deklarasikan tipe objectnya
        const person: {name: string, age: number} = {
            name: "Nurdin",
            age: 20
        }

        person.name = "Nurdin Hishasy";

        console.log(person);

        //! ERROR
        // person.name = 20; //! akan error karena tidak ssesuai tipe data
        // person.height = 20; //! akan error karena properti tidak ada pada deklarasi

    });
});