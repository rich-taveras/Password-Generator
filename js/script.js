// Assignment Code
var generateBtn = document.querySelector("#generate");

//  function declaration / function statement
function generatePassword() {
  var savepassword = "";
  var tagName = prompt(
    "How many characters would you like your password to contain?"
  );

  if (tagName < 8 || tagName > 129) {
    alert("Password lenght should be between 8 to 128 characters");
    return "";
  } else {
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
    var specialCh = "/?!@#$%^&";
    var lowerCase = "acbdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "0123456789";
    if (specialConfirm) {
    var ramdomIndex = Math.floor(Math.random() *specialCh.length)
    savepassword = savepassword + specialCh[ramdomIndex]
    console.log(savepassword)
    }
    if (lowerConfirm){
      var ramdomIndex = Math.floor(Math.random() *lowerCase.length)
      savepassword = savepassword + lowerCase[ramdomIndex]
    console.log(savepassword)
    }
    if (upperConfirm){
      var ramdomIndex = Math.floor(Math.random() *upperCase.length)
      savepassword = savepassword + upperCase[ramdomIndex]
    console.log(savepassword)
    }
    if (numericConfirm){
      var ramdomIndex = Math.floor(Math.random() *numeric.length)
      savepassword = savepassword +numeric[ramdomIndex]
    console.log(savepassword)
    }
  }
  return savepassword
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
