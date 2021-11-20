//1. Prompt user for password criteria
// a. Password length 8-128
//  b. lowercase, uppercase, numeric, and/or special characters
//2. Validate input
//3. Display password on page


// Assignment code here

// Get references to the #generate element
/*
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lengthPassword = window.prompt("Choose password length (type a value between 8-128).");
  var lowerPassword =  window.prompt("Do you want lowercase letters in your password? (Y/N).");
  var upperPassword = window.prompt("Do you want uppercase letters in your password? (Y/N).");
  var numPassword = window.prompt("Do you want numbers in your password? (Y/N).");
  var charPassword = window.prompt("Do you want special characters in your password? (Y/N).");

  const resultEl = document.getElementById('result');
  const lengthEl = document.getElementById('length');
  const uppercaseEl = document.getElementById('uppercase');
  const lowercaseEl = document.getElementById('lowercase');
  const numberEl = document.getElementById('number');
  const symbolsEl = document.getElementById('symbols');
  const generateEl = document.getElementById('generate');
  const clipboardEl = document.getElementById('clipboard');

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomNumber,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }

  //generate event listen
  generateEl.addEventListener('click', () => {
    const length = +lengthEl.value; 
    const hasLower = lowercaseEl.checked; 
    const hasUpper = uppercaseEl.checked; 
    const hasNumber = numberEl.checked; 
    const hasSymbol = symbolsEl.checked; 

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);

    console.log(typeof length);
  })

function alphaLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function alphaUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function number() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function specialChar() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


  return "Generated Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
//var generateBtn.addEventListener("click", writePassword);



// The Password generator will provide a password with 8-50  characters based on criteria the user specifies.

//Assignment Code + Event Listener to prompt questions when button pushed
//document.querySelector("#generate").addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Various Arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("Choose password length. (Type a value between 8-128)"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters! Try again.");
      var confirmLength = (prompt("Choose password length. (Type a value between 8-128)"));
      } 

      // Repeat back how many charactes the user will have  
     

    // Determine parameters of password 
    var confirmLowerCase = confirm("Click OK if you would like lowercase letters in your password.");
        var confirmUpperCase = confirm("Click OK if you would like uppercase letters in your password.");   
        var confirmNumericCharacter = confirm("Click OK if you would like to numbers in your password.");    
        var confirmSpecialCharacter = confirm("Click OK if you would like special characters in your password.");
          // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("Please choose at least one parameter.");
        var confirmLowerCase = confirm("Click OK if you would like lowercase letters in your password.");
        var confirmUpperCase = confirm("Click OK if you would like uppercase letters in your password.");   
        var confirmNumericCharacter = confirm("Click OK if you would like to numbers in your password.");    
        var confirmSpecialCharacter = confirm("Click OK if you would like special characters in your password.");
        
      }
      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
