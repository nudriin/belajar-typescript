describe('Function interface', () => {
    it('Function interface test', () => {
        // Membuat sebuah interface function
        interface counter {
            // (paraemeter): return valuenya 
            (value: number): number
        }

        interface sayHi {
            (name: string): void
        }

        const counters: counter = (value: number): number => {
            return value++;
        }

        const hi: sayHi = (name: string): void => {
            console.log(`Hi ${name}`);
        }


        console.log(counters(2));

        hi("Nurdin")

    });
});