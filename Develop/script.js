//1. Prompt user for password criteria
// a. Password length 8-128
//  b. lowercase, uppercase, numbers, and/or special characters
//2. Validate input
//3. Display password on page


// Assignment code here


//Password character arrays 
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Password length
function generatePassword() {
  var pwLength = (prompt("Choose password length. (Type a value between 8-128)"));

  // Loop if input doesn't match criteria
  while (pwLength <= 8 || pwLength >= 128) {
      alert("Password length must be between 8-128 characters! Try again.");
      return generatePassword();
    } 

      // Prompts
     var confirmLowerCase = window.confirm("Click OK if you would like lowercase letters in your password.");
     var confirmUpperCase = window.confirm("Click OK if you would like uppercase letters in your password.");   
     var confirmNumberCharacter = window.confirm("Click OK if you would like to numbers in your password.");    
     var confirmSpecialCharacter = window.confirm("Click OK if you would like special characters in your password.");
    
       // Loop if answer is outside the parameters 
    while(confirmUpperCase === false && confirmLowerCase === false && confirmNumberCharacter === false && confirmSpecialCharacter === false) {
      window.alert("Please select at least one criteria.");
      var confirmLowerCase = window.confirm("Click OK if you would like lowercase letters in your password.");
      var confirmUpperCase = window.confirm("Click OK if you would like uppercase letters in your password.");   
      var confirmNumberCharacter = window.confirm("Click OK if you would like to numbers in your password.");    
      var confirmSpecialCharacter = window.confirm("Click OK if you would like special characters in your password."); 
    }

    //Password build
        var passwordCharacters = []
   
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

    if (confirmNumberCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
   
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }
      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < pwLength; i++) {
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
    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

