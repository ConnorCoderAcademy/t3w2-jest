const { rollDice } = require('../src/diceRolling')

describe("Casual tabletop gamer...", () => {
    let number = 5 
    test.skip("...wants to roll a D6 and see a valid result", () => {
        //expect(number).toBe(5);
        expect(rollDice()).toBeGreaterThan(0);
        expect(rollDice()).toBeLessThanOrEqual(6);
    })
});

describe("Tabletop RPG gamer...", () => {
    test("...wants to roll a D20 with advantage and see both roll results as well as the best roll", () => {

    });

    test("...wants to roll a D20 with disadvantage and see both roll results as well as the worst roll", () => {
        
    });
    // In D&D, we have these dice:
    // D4, D6, D8, D10, D12, D20, D100
    describe("...wants to roll a variety of dice. Specially they want to roll a ...", () => {
        test("D4", () => {

        })
        test("D6", () => {
            
        })
        test("D8", () => {
            
        })
    })
});