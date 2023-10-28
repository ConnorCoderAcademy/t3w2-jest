const { rollDice } = require('../src/diceRolling')

beforeEach(() => {
    console.log("Message runs at beginning of each test")
})

afterEach(() => {
    console.log("Message runs at end of each test")
})

describe("Casual tabletop gamer...", () => { 
    test("...wants to roll a D6 and see a valid result", () => {
        //expect(number).toBe(5);
        expect(rollDice()).toBeGreaterThan(0);
        expect(rollDice()).toBeLessThanOrEqual(6);
        

        let diceResult = rollDice()
        expect(diceResult).toBeGreaterThan(0);
        expect(diceResult).toBeLessThanOrEqual(6);
    })
});

describe("Tabletop RPG gamer...", () => {
    test("...wants to roll a D20 with advantage and see both roll results as well as the best roll", () => {
        expect(rollDice(20)).toBeGreaterThan(0)

    });

    test("...wants to roll a D20 one hundred times and see how many natural 20s they get", () => {
        let diceResults = [];
        for (let i = 0; i < 100; i++) {
            diceResults.push(rollDice(20))
        } 

        //console.log(diceResults)
        //expect(diceResults.length).toEqual(100);
        expect(diceResults).toHaveLength(100);
        expect(diceResults).toContain(20);
    })


    test("...wants to roll a D20 with disadvantage and see both roll results as well as the worst roll", () => {
        
    });
    // In D&D, we have these dice:
    // D4, D6, D8, D10, D12, D20, D100
    describe("...wants to roll a variety of dice. Specially they want to roll a ...", () => {
        let diceVarieties = [
            {
                diceSize: 4,
                diceName: "D4"
            },
            {
                diceSize: 6,
                diceName: "D6"
            },
            {
                diceSize: 8,
                diceName: "D8"
            },
            {
                diceSize: 10,
                diceName: "D10"
            },
            {
                diceSize: 20,
                diceName: "D20"
            },
            {
                diceSize: 100,
                diceName: "D100"
            },
        ];
        test.each(diceVarieties)("$diceName", (diceObj) => {
            let diceResult = rollDice(diceObj.diceSize)
            console.log(`Dice rolling of ${diceObj.diceName} returned ${diceResult}`)
            expect(diceResult).toBeGreaterThan(0);
            expect(rollDice(diceObj.diceSize)).toBeLessThanOrEqual(diceObj.diceSize)
        })
        // test("D4", () => {
        //     expect(rollDice()).toBeGreaterThan(0);
        //     expect(rollDice()).toBeLessThanOrEqual(4);

        // })
        // test("D6", () => {
        //     expect(rollDice()).toBeGreaterThan(0);
        //     expect(rollDice()).toBeLessThanOrEqual(6);
            
        // })
        // test("D8", () => {
        //     expect(rollDice()).toBeGreaterThan(0);
        //     expect(rollDice()).toBeLessThanOrEqual(8);
            
        // })
    })
});