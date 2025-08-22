function rollDice() {
    // Generate random numbers between 1 and 6 for each die
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Update the dice display
    document.getElementById('dice1').textContent = dice1;
    document.getElementById('dice2').textContent = dice2;

    // Determine the result
    let resultText;
    if (dice1 > dice2) {
        resultText = "Sweetpea won! 🥳";
    } else if (dice2 > dice1) {
        resultText = "Snowball won! 😎";
    } else {
        resultText = "It's a tie! 😘";
    }
    document.getElementById('result').textContent = resultText;
}
