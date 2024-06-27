import { Car } from "../src/readonly-properties"

describe('Readonly properties', () => {
    it('should readonly properties', () => {
        const car1: Car = {
            id: 2231,
            name: "Mazda 3 Hatchback",
            plat: "KH 1122 SD"
        }
        // * INI AMAN 
        car1.name = "Nissan GTR R34 Nismo"; // ini boleh

        // ! ERROR
        // car1.plat = "KH 2232 SD" //! AKAN ERROR KARENA PROPERTYNYA READONLY

        console.log(car1);

    })
})
