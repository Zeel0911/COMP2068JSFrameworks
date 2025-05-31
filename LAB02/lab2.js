// This is a simple Rock, Paper, Scissors game 
const prompt = require('prompt');

console.log("\nWelcome to the Rock, Paper, Scissors game....!!!\n");
console.log("To start your game, please select one of the following options: ROCK, PAPER, SCISSORS\n");

// Define the valid choices for the game
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Initialize the prompt for user input
prompt.start();

prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error('An error occurred while retrieving input.');
    return;
  }

  // Convert user input to uppercase for consistency
  const userSelection = result.userSelection.toUpperCase(); 
  if (!options.includes(playerChoice)) {
    console.log("Invalid input. Please choose ROCK, PAPER, or SCISSORS.\n");
    return;
  }
const randValue = Math.random();
  let cpuChoice;

  if (randValue <= 0.34) {
    cpuChoice = 'PAPER';
  } else if (randValue <= 0.67) {
    cpuChoice = 'SCISSORS';
  } else {
    cpuChoice = 'ROCK';
  }
});
