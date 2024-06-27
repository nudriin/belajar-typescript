import { Person } from "../src/optional-properties";

describe('Optiona Properties', ():void => {
    it('should optional', ():void => {

        // * Type person bersifat opsional, pada properti status, itu tidak wajib di isi
        // berikut ini merupakan contoh di isi
        const person1: Person = {
            id: 1122,
            name: 'Nurdin',
            age: 20,
            status: "Student"
        };
        
        // berikut ini merupakan contoh tidak wajib di isi
        const person2: Person = {
            id: 1123,
            name: 'Hishasy',
            age: 17,
        };

        console.log(person1);
        console.log(person2);
        
    });
});