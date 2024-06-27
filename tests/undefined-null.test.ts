describe('Undefined', (): void => {
    it('undefined types', (): void => {
        // * name? dapat di isi dengan undefined meskipun tipe datanya string
        // * iya dapat bertipe string maupun undefined
        const sayName = (name?: String) => {
            if(name) {
                console.log(`Hello ${name}`);
            } else{
                console.log("Hello");
                
            }
        } 

        sayName("Nurdin");

        // Bisa seperti ini apabila ada kasus datanya dapat berisikan undefined
        const name: string | undefined = undefined;
        sayName(name);
        
        // Bisa juga di isi undefined begini
        sayName(undefined);

        // ! ERROR
        // sayName(null); // ! akan error
    });    

    it('null types', (): void => {
        // * untuk dapat mengisi dengan null, maka gunakan union type null
        // * iya dapat bertipe string maupun null
        const sayName = (name?: String | null) => {
            if(name) {
                console.log(`Hello ${name}`);
            } else{
                console.log("Hello");
                
            }
        } 

        sayName("Nurdin");

        // Bisa seperti ini apabila ada kasus datanya dapat berisikan undefined
        const name: string | undefined = undefined;
        sayName(name);
    
        // Bisa juga di isi undefined begini
        sayName(undefined);

        // * BISA BEGINI
        sayName(null); // * AMAN
    });    
});