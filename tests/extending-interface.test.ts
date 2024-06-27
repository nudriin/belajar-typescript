import { Employee, Manager } from "../src/extends-interface";

describe("Extending interface", () => {
    test("should extend the interface", () => {
        // ini adalah contoh penggunaan interface employe yang memiliki
        // propertiesa id, name dan division
        const employee: Employee = {
            id: 2212,
            name: "Nagara",
            division: "IT",
        };

        // Interface manager juga mewarisi properties
        // id, name dan division yang dimiliki oleh interface Employee
        const manager: Manager = {
            id: 1122,
            name: "Nurdin",
            division: "IT",
            numberOfEmployee: 10,
        };

        console.log(employee);
        console.log(manager);
    });
});
