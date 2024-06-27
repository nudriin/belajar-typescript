// * Membuat tipe dat alias
// Tipe data alias adalah tipe data dimana kita dapat
// menentukan setiap properti dan setiap tipe data properti yang ada pada sebuah object
// alias ini kita seperti membuat tipe data baru

export type Category = {
    id: number,
    name: string,
};

export type Product = {
    id: number, 
    name: string,
    quantity: number,
    price: number,
    isAvailable: boolean
};

// *TYPE ALIAS DENGAN UNION

export type ID = string | number;

export type User = {
    id: ID, // * Menggunakan tipe alias yang union juga
    name: string,
    age: number | string, // * bisa juga begini
    address: string
}