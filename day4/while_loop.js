/*
while (condition) {
    // code to execute
}
 */

// ví du 1: đếm từ 1 đến 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// ví dụ 2: Guessing game

let secretNumber = 7;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number (1-10):"));
  attempts++;

  if (guess < secretNumber) {
    console.log("Too low!");
  } else if (guess > secretNumber) {
    console.log("Too high!");
  }
}
console.log(`Correct! You guessed in ${attempts} attempts.`);
