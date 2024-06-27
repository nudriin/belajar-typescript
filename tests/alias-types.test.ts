import { Category, Product, User } from "../src/alias-type";

describe('Alias', () => {
    it('Should use alias', () => {

        // Jika tidak sesauai dengan type category maka akan terjadi error
        // Jika urutan properti tidak sesuai akan error juga,
        
        const pakaian: Category = {
            id: 1121,
            name: "Pakaian"
        }

        const celana: Product = {
            id: 1112,
            name: "Celana Panjang Pria",
            quantity: 20,
            price: 20000,
            isAvailable: true
        }

        console.log(pakaian);
        console.log(celana);
        

        // ! AKAN ERROR
        // const makanan: Category = {
        //     name: "Pakaian",
        //     id: "1122" //! AKAN error karena tidak sesuai tipe data
        // }
    });

    it('should alias with union type', () => {

        // Alias dengan tipe data union
        const user1: User = {
            id: "1122",
            name: "nurdin",
            age:20,
            address: "JL. Setia Yakin"
        }

        // Bisa juga begini, AMANNNNN
        const user2: User = {
            id: 1122,
            name: "nurdin",
            age:"20",
            address: "JL. Setia Yakin"
        }

        console.log(user1);
        console.log(user2);
    });
});