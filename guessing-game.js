function guessingGame() {
    const randomNum = Math.floor(Math.random() * (100 - 0));
    let count = 0;
    let won = false;
    return function (guess) {
        if (won) {
            return "The game is over, you already won!";
        }
        if (guess === randomNum) {
            count++;
            won = true;
            return `You win! You found ${randomNum} in ${count} guesses.`;
        } if (guess > randomNum) {
            count++;
            return `${guess} is too high!`;
        } if (guess < randomNum) {
            count++;
            return `${guess} is too low!`;
        }
    };
}
console.log(guessingGame());
module.exports = { guessingGame };
