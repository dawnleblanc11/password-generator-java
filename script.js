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
// create Random values to be used in password creation
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumeric() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
        const special = ['\u0020','\u0021','\u0022','\u0023','\u0024','\u0025', '\u0026','\u0027', '\u0028', '\u0029', '\u002A','\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u005B', '\u005C', '\u005D', '\u005E', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E'];
        return special[Math.floor(Math.random() * special.length)];
}
//source of special charaters unicode https://owasp.org/www-community/password-special-characters
//use the unicodes for special characters to avoid syntax problems in the array


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Call writePassword function
writePassword();
