import { Customer, CustomerType, Gender } from "../src/enum-data-types";

describe('Enum', ():void => {
    it('should enum', (): void => {
        const customer1: Customer = {
            id: 1121,
            name: 'Nurdin',
            age: 20,
            gender: Gender.MALE, // * CARA MENGGUNAKAN DATA ENUMNYA
            type: CustomerType.PLATINUM
        }

        if(customer1.gender === Gender.MALE){
            console.log("Gender is male");
        } else {
            console.log("Gender is female");
        }

        if(customer1.type === CustomerType.REGULER){
            console.log(`Type is ${CustomerType.REGULER}`);
        } else if(customer1.type === CustomerType.GOLD) {
            console.log(`Type is ${CustomerType.GOLD}`);
        } else {
            console.log(`Type is ${CustomerType.PLATINUM}`);
        }

        console.log(customer1);
    });
})