//1. Prompt user for password criteria
// a. Password length 8-128
//  b. lowercase, uppercase, numeric, and/or special characters
//2. Validate input
//3. Display password on page


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Password character arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!","@","#","$","%","^","&","*","-","+","=",];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables 
var passwordLength = "";
var passwordSpecialCharacter;
var passwordNumericCharacter;
var passwordUpperCase;
var passwordLowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);