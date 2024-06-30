// chapter 21 to 25 
// string method

// question 01 : program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name.");
// var lastName = prompt("Enter your Last name.");
// var fullName = firstName + " " + lastName ;
// console.log("Hello " + fullName + "!");

// question 02 : Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var phone = prompt("Enter your favorite mobile model.");
// console.log("My favorite phone is : " + phone + "\n" + "Length of string : " + phone.length);

// question 03 : Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var str = "Pakistin"
// var str1 = str.indexOf("n")
// console.log("string : " + str + "\n" + "index of 'n' : " + str1);

//question 04 : Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var str = "Hello World!"
// var str1 = str.lastIndexOf("l")
// console.log("string : " + str + "\n" + "Last indexof 'l': " + str1);

// question 05 : Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var str = "pakistan";
// var str1 = str.charAt(3)
// console.log("string : " + str + "\n" + "character at index 3 : " + str1);

//question 06 : Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name.");
// var lastName = prompt("Enter your last name.");
// var fullName = firstName.concat(" ", lastName);
// console.log("Hello, " + fullName + "!");

// question 07 : Write a program to replace the “Hyder” to “Islam” in theword “Hyderabad” and display the result in your browser.
// var city = "Hyderabad";
// console.log("city : " + city + "\n" + "After replacement : "+ city.replace("Hyder", "Islam"));

//question 08 : Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log("Messgae : " + message + "\n" + "After replacement : "+ message.replace(/and/g, "&"));

//question 09 : Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var str = "472";
// var num = parseInt(str)
// console.log("Value : " + str + "\n" + "type : " + typeof str + "\n" + "Value : " + str + "\n" + "type : " + typeof num);

// question 10 : Write a program that takes user input. Convert and show the input in capital letters.
// var str = "peanuts";
// var upperCaseLetter = str.toUpperCase();
// console.log("user input : " + str + "\n" + "Upper Case : " + upperCaseLetter);

//question 11 : Write a program that takes user input. Convert and show the input in title case.
// var str = "jawascript is awesome!"
// var titleCase = str.split(" ")
// for (var i = 0 ; i < titleCase.length ; i++){
//    titleCase[i] = titleCase[i][0].toUpperCase() + titleCase[i].slice(1).toLowerCase()
 
// }
// console.log("user input "+ str + "\n" + "Title Case : "+titleCase.join(" "));

//question 12 : Write a program that converts the variable num tostring
// var num = 35.36;
// var str = num.toString().replace(".", "");
// console.log("Number: " + num + "\n" + "Result : " + str);

// question 13 : Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// var username = prompt("Enter your name");
// var regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
// var isValid = regex.test(username);

// if (isValid) {
//   console.log("Valid username");
// } else {
//   console.log("Invalid username");
// }

//question 14 :Write a program to enable search by user input in an array. After searching, prompt the user whether the given item is found in the list or not. 
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC bakery : What do you want to order sir/ma'am?").toLowerCase();
// var itemFound = false;
// var foundIndex = -1;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput) {
//     itemFound = true;
//     foundIndex = i;
//     break; 
//   }
// }
// if (itemFound) {
//   alert(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " is available at index " + foundIndex + " in our bakery.");
// } else {
//   alert("We are Sorry, " + userInput + " is not available in our bakery. Please try again.");
// }

//question 15 : Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long.
// var password = prompt("Enter your password:");
// while (true) {
//   var isValid = true;
//   if (password.length < 6) {
//     alert("Password must be at least 6 characters long.");
//     isValid = false;
//   }
//   var hasAlphabet = /[a-zA-Z]/.test(password);
//   var hasNumber = /[0-9]/.test(password);

//   if (!hasAlphabet || !hasNumber) {
//     alert("Password must contain both alphabets and numbers.");
//     isValid = false;
//   }
//   if (/^[0-9]/.test(password)) {
//     alert("Password should not start with a number.");
//     isValid = false;
//   }
//   if (isValid) {
//     alert("Password is valid.");
//     break;
//   } else {
//     password = prompt("Enter a valid password:");
//   }
// }

//Qusetion 16 : Write a program to convert the following string to an array using string split method.
// var university = "University of Karachi";
// var universityArray = university.split("");
// for (var i = 0; i < universityArray.length; i++) {
//   console.log(universityArray[i] + "\n");
// }

// question 17 : Write a program to display the last character of a user input.
// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// console.log("User input: " + userInput + "\n"+ "Last character of input : " + lastCharacter);

// question 18 : You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var str = "The quick brown fox jumps over the lazy dog ";
// var wordToFind = "the";
// var count = 0;
// var strLower = str.toLowerCase();
// var wordLower = wordToFind.toLowerCase();
// var words = strLower.split(" ");
// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordLower) {
//         count++;
//     }
// }
// console.log(str + "\n" + "Number of occurrences of '" + wordToFind + "': " + count);


// ============================  chapter end 21 to 25   =================================