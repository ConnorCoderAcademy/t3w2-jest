
function rollDice (diceSize = 6) {
    // Use math random in a way that returns a number between 1 and 6 
    // Math floor always rounds down, diceSize 6 returns 0-5, so we +1

    let result = Math.floor(Math.random() * diceSize) + 1;

    return result;
}

module.exports = {
    rollDice
}