// Assignment Code
var generateBtn = document.querySelector("#generate");
// Series of Prompts
// User will be asked first what length they would like their password to be
// Send an error message if outside range
// Then verify via click ok on prompt if they want Upper, Lower, Numeric or Special Characters

// Record the password length the user selects- restricted between 8-128 in userpwLength
var userpwLength = window.prompt(
  "Please choose a password length between 8 and 128 characters:"
);
if (userpwLength > 128 || userpwLength < 8) {
  window.alert(
    "Reminder your password length needs to be between 8 and 128 characters:"
  );
} else {
  //Identify the user selections and capturing the boolean value in the variable
  var userpwUpper = window.confirm(
    "Would you like the password to include Uppercase letters?"
  );
  var userpwLower = window.confirm(
    "Would you like the password to include lowercase letters?"
  );
  var userpwNumeric = window.confirm(
    "Would you like the password to include numbers?"
  );
  var userpwSpecial = window.confirm(
    "For a stronger password, would you like to include special characters?"
  );
}
if (userpwUpper + userpwLower + userpwNumeric + userpwSpecial === 0) {
  window.alert("Please select at least one character type");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
