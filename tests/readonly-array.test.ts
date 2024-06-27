describe("Readonly", () => {
    it("Read only array", (): void => {
        const ages: ReadonlyArray<number> = [1,2,3,4,5];

        const names: ReadonlyArray<string> = ["Nurdin", "Hishasy", "Sunny"];

        // console.log(names);
        // ! names[0] = "Hisahsy"; //akan error di tsc
        console.log(names);
        console.log(ages);
    });
});