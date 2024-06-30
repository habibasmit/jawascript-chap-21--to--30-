// chapter 25 to 30 
// math methods

// // question 01 : Write a program that takes a positive integer from user & display the following in your browser.
// var number = +prompt("Enter a number:");
// document.write("<b>a. Number:</b> " + number + "<br>");

// // rounnd
// var roundValue = Math.round(number);
// document.write("<b>b. Round off value:</b> " + roundValue + "<br>");

// // floor
// var floorValue = Math.floor(number);
// document.write("<b>c. Floor value:</b> " + floorValue + "<br>");

// // ceil
// var ceilValue = Math.ceil(number);
// document.write("<b>d. Ceil value:</b> " + ceilValue + "<br>");

//quwstion 02 :  Write a program that takes a negative floating point number from user & display the following in your browser.
// Take negative floating point number input from user
// var number = parseFloat(prompt("Enter a negative floating point number:"));
// document.write("<b>a. Number:</b> " + number + "<br>");
// //round
// var roundValue = Math.round(number);
// document.write("<b>b. Round off value:</b> " + roundValue + "<br>");

// // floor
// var floorValue = Math.floor(number);
// document.write("<b>c. Floor value:</b> " + floorValue + "<br>");

// // ceil
// var ceilValue = Math.ceil(number);
// document.write("<b>d. Ceil value:</b> " + ceilValue + "<br>");

//question 03 : Write a program that displays the absolute value 
// Example 1: Using a predefined number
// var num=+prompt('Enter number :');
// var value=Math.abs(num);
// console.log('The absolute value of '+ num +'  is '+ value);

// question 04 : Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
// var diceValue = Math.floor(Math.random() * 6) + 1;
// console.log("The dice rolled: " + diceValue);

// question 05 : Write a program that simulates a coin toss using random()  method of JS Math class. Display the value of coin in your browser
// var randomNumber = Math.random();
// var coinResult;
// if (randomNumber < 0.5) {
//     coinResult = "Heads";
// } else {
//     coinResult = "Tails";
// }
// document.write("The coin landed on: " + coinResult);

// question 06 : Write a program that shows a random number between 1 and 100 in your browser.
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100 : " + randomNumber);

//question no 07 : Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// var userInput = prompt("Enter your weight in kilograms:");
// var weight = parseFloat(userInput);
// document.write("Your weight is: " + weight.toFixed(2) + " kilograms");

// question 08 : Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userInput === secretNumber) {
//     alert("Congratulations! You guessed the secret number.");
// } else {
//     alert("Oops! Sorry, the secret number was " + secretNumber + ". Try again!");
// }

// =========================  chapter end 26 to 30 ==========================