//1. Prompt user for password criteria
// a. Password length 8-128
//  b. lowercase, uppercase, numeric, and/or special characters
//2. Validate input
//3. Display password on page


// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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

// Password length
function generatePassword() {
  var passwordLength = (prompt("Choose password length. (Type a value between 8-128)"));

  // Loop if input doesn't match criteria
  while(passwordLength <= 8 || passwordLength >= 128) {
      alert("Password length must be between 8-128 characters! Try again.");
      var passwordLength = (prompt("Choose password length. (Type a value between 8-128)"));
      } 

      // Prompts
    var passwordLowerCase = password("Click OK if you would like lowercase letters in your password.");
        var passwordUpperCase = password("Click OK if you would like uppercase letters in your password.");   
        var passwordNumericCharacter = password("Click OK if you would like to numbers in your password.");    
        var passwordSpecialCharacter = password("Click OK if you would like special characters in your password.");
          // Loop if answer is outside the parameters 
      while(passwordUpperCase === false && passwordLowerCase === false && passwordSpecialCharacter === false && passwordNumericCharacter === false) {
        alert("Please choose at least one parameter.");
        var passwordLowerCase = password("Click OK if you would like lowercase letters in your password.");
        var passwordUpperCase = password("Click OK if you would like uppercase letters in your password.");   
        var passwordNumericCharacter = password("Click OK if you would like to numbers in your password.");    
        var passwordSpecialCharacter = password("Click OK if you would like special characters in your password.");
        

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);