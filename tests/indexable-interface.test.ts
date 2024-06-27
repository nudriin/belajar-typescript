describe('Indexable Interface', () => {
    test('Indexable', () => {
        interface StringOfArray {
            // indexnya bertipe number dan valuenya bertipe string
            [index: number]: string;
        }

        const stringArray: StringOfArray = ['Nurdin', 'Hishasy', 'SunnySummer'];
        console.log(stringArray);

        // Interface untuk object (MAP)
        // setiap propertynya haruslah string
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            name: "Nurdin",
            address: "JL. Setia Yakin"
        }









        console.log(dictionary);
        console.log(dictionary['name']);
        console.log(dictionary['address']);
    });
})
