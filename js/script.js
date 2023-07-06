// Assignment Code
var generateBtn = document.querySelector("#generate");

var savePassword = "";
var specialChar = "/?!@#$%^&(){}[]<>=+-";
var lowerCase = "acbdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";

//  function declaration / function statement
function generatePassword() {
  var passwordLenght = prompt(
    "How many characters would you like your password to contain?"
  );
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("Password lenght should be between 8 to 128 characters");
    return "";
  }
  var specialConfirm = confirm(
    "Click Ok to confirm including special characters"
  );
  var lowerConfirm = confirm(
    "Click Ok to confirm including lowercase characters"
  );
  var upperConfirm = confirm(
    "Click Ok to confirm including uppercase characters"
  );
  var numericConfirm = confirm(
    "Click Ok to confirm including numeric characters"
  );
  if (specialConfirm === false && lowerConfirm === false && upperConfirm === false && numericConfirm === false){
    alert ("Must select at least one character type");
    return "";
  }
  for (var i = 0; i < passwordLenght; i++) {
    if (specialConfirm && savePassword.length < passwordLenght) {
      var ramdomIndex = Math.floor(Math.random() * specialChar.length);
      savePassword = savePassword + specialChar[ramdomIndex];
      console.log(savePassword);
    }
    if (lowerConfirm && savePassword.length < passwordLenght) {
      var ramdomIndex = Math.floor(Math.random() * lowerCase.length);
      savePassword = savePassword + lowerCase[ramdomIndex];
      console.log(savePassword);
    }
    if (upperConfirm && savePassword.length < passwordLenght) {
      var ramdomIndex = Math.floor(Math.random() * upperCase.length);
      savePassword = savePassword + upperCase[ramdomIndex];
      console.log(savePassword);
    }
    if (numericConfirm && savePassword.length < passwordLenght) {
      var ramdomIndex = Math.floor(Math.random() * numeric.length);
      savePassword = savePassword + numeric[ramdomIndex];
      console.log(savePassword);
    }
  }
 
  return savePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

