// Assignment Code
var generateBtn = document.querySelector("#generate");
var tagName = prompt("How many characters would you like your password to contain?", "enter tag");

// if (tagName !> 8 && tagName >128 )
// alert("Password lenght shoulb be between 8 to 128 characters")

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// alert ("How many characters would you like your password to contain?", )

// How many characters would you like your password to contain?

// Password length must be more than 7 characters
// Password length must be less than 129 characters

// Click Ok to confirm including special characters
// Click Ok to confirm including numeric characters
// Click Ok to confirm including lowercase characters
// Click Ok to confirm including uppercase characters

// Must select at least one character type



