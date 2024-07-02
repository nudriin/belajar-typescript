import { Person } from "../src/optional-properties";

describe("Type Assertions", () => {
    it("should type assertions", () => {
        // tipe assertion ini seperti casting tipe data,
        // type asssertion digunakan untuk mengkonversi tipe data
        const person: any = {
            id: 2211,
            name: "Nurdin",
            age: 20,
            university: "UPR",
        };

        // ini adalah casting dari person yang bertipe adata any ke tipe Person
        const person2: Person = person as Person;

        // tidak akan bisa dipanggil, karena pada struktur pada tipe data Person tidak lah ada
        // person2.university;

        console.log(person2);
    });
});
