describe("Intersection Types", () => {
    test("should do intersection type", () => {
        // Intersection adalah proses menggabungkan dua tipe data
        // proses ini mengahsilkan tipe data baru gabungan antara dua tipe data
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number;
        }

        // Membuat type domain yang merupakan gabungan dari HasId dan HasName
        // * Dibuat menggunakan tanda tipedata1 '&' tipedata2
        type Domain = HasId & HasName;

        // Maka hasilnya akan seperi dibawah ini
        const domain: Domain = {
            id: 1122,
            name: "Nurdin",
        };

        console.log(domain);
    });
});
