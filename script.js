// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmSymbols;
var confirmUppercase;
var confirmLowercase;
var choices;



var optionsLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var optionsUpperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var optionsNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var optionsSymbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var space = [];


// Write password to the #password input
function writePassword() {
  
  enter = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128")); 
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else { 
  confirmNumber = window.confirm("Will this password contain numbers?");
  confirmSymbols = window.confirm("Will this password contain special characters?");
  confirmUppercase = window.confirm("Will this password contain Uppercase letters?");
  confirmLowercase = window.confirm("Will this password contain Lowercase letters?");
};
  
if (!confirmNumber && !confirmSymbols && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!"); }
  
  
  else if (confirmNumber && confirmSymbols && confirmUppercase && confirmLowercase) {

    choices = optionsNumbers.concat(optionsSymbols, optionsLetters, optionsUpperLetters);
}

else if (confirmNumber && confirmSymbols && confirmUppercase) {

  choices = optionsNumbers.concat(optionsSymbols, optionsUpperLetters)
}

else if (confirmNumber && confirmSymbols && confirmLowercase) {

  choices = optionsNumbers.concat(optionsSymbols, optionsLetters)
}

else if (confirmSymbols && confirmUppercase && confirmLowercase) {

  choices = optionsSymbols.concat(optionsUpperLetters, optionsLetters)
}

else if (confirmNumber && confirmUppercase && confirmLowercase) {

  choices = optionsNumbers.concat(optionsUpperLetters, optionsLetters)
}

else if (confirmNumber && confirmSymbols) {

  choices = optionsNumbers.concat(optionsSymbols)
}

else if (confirmNumber && confirmUppercase) {

  choices = optionsNumbers.concat(optionsUpperLetters)
} 

else if (confirmNumber && confirmLowercase) {

  choices = optionsNumbers.concat(optionsLetters)
}

else if (confirmSymbols && confirmUppercase) {

  choices = optionsSymbols.concat(optionsUpperLetters)
}

else if (confirmSymbols && confirmLowercase) {

  choices = optionsSymbols.concat(optionsLetters)
}

else if (confirmUppercase && confirmLowercase) {

  choices = optionsUpperLetters.concat(optionsLetters)
}

else if (confirmNumber) {

    choices = optionsNumbers
}

else if (confirmSymbols) {

    choices = optionsSymbols
}

else if (confirmUppercase) {

    choices = optionsUpperLetters
}

else if (confirmLowercase) {

    choices = optionsLetters
};

var password = [];

for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices); }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
document.getElementById("password").textContent = ps;

}

  
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  
  //passwordText.value = password;
  


//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
ps = generatePassword();
document.getElementById("password").placeholder = ps; 
