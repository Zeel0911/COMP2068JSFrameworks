// A basic Rock, Paper, Scissors game in Node.js
const prompt = require('prompt');

console.log("\nWelcome to the Rock, Paper, Scissors game....!!!\n");
console.log("To start your game, please select one of the following options: ROCK, PAPER, SCISSORS\n");

// choices for the game
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Initialize the prompt for user input
prompt.start();

prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error('An error occurred while retrieving input.');
    return;
  }

  // Normalize input to uppercase for comparison
  const userSelection = result.userSelection.toUpperCase(); 

  // Validate the user's input
  if (!choices.includes(userSelection)) {
    console.log("Invalid input. Please choose ROCK, PAPER, or SCISSORS.\n");
    return;
  }

  // Generate computer move
  const randValue = Math.random();
  let cpuChoice;

  if (randValue <= 0.34) {
    cpuChoice = 'PAPER';
  } else if (randValue <= 0.67) {
    cpuChoice = 'SCISSORS';
  } else {
    cpuChoice = 'ROCK';
  }

  // Display  two choices
  console.log(`Player chose: ${userSelection}`);
  console.log(`Computer chose: ${cpuChoice}`);

  // Announcing the winner
  if (userSelection === cpuChoice) {
    console.log("It's a tie");
  } else if (
    (userSelection === 'ROCK' && cpuChoice === 'SCISSORS') ||
    (userSelection === 'PAPER' && cpuChoice === 'ROCK') ||
    (userSelection === 'SCISSORS' && cpuChoice === 'PAPER')
  ) {
    console.log("Player Wins");
  } else {
    console.log("Computer Wins");
  }

  console.log("\nThanks for playing!\n");
});
