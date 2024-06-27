describe("Tuple", () => {
    it('Tuple', (): void => {
        // Tuple adalah array yang panjang dan tipe data pada setiap indexnya \
        // sudah ditentukan sejak awal deklarrasi dan bersifat readonly
        // menggunakan tipe data "readonly"
        const tuple: readonly [string, boolean, number, string] = ["nurdin", true, 23, "nurdin"];

        // jika jumlah data pada tuplenya lebih dari jumlah data yang ada
        // pada saat deklarasi berbeda maka akan terjadi error juga
        // ! const tuple: readonly [string, boolean, number] = ["nurdin", true, 23, "nurdin", "sama"];
        
        // jika tipe datanya bebrbeda pada tiap index maka akan terjadi error juga
        // ! const tuple: readonly [string, boolean, number] = ["nurdin", "nurdin", "sama"];
    });
});