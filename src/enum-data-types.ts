// * berikut merupakan cara untuk membuat enum pada TS secara default
export enum Gender {
    MALE,
    FEMALE
}

// * RECOMEND
// * berikut merupakan cara untuk membuat enum pada TS sebagai string
export enum CustomerType {
    REGULER = 'REGULER',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}

export type Customer = {
    id: number,
    name: string,
    age: number,
    gender: Gender // * menggunakan enum nya pada sebuah type
    type: CustomerType
}