// Variable Here
var generateBtn = document.querySelector("#generate");
var passwordBase = "";
var numberBase = "0123456789";
var specialBase = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var uppercaseBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseBase = "abcdefghijklmnopqrstuvwxyz";
var temp = [];

// Start generating password
function generatePassword() {
  console.log("Click the button");

// Password requirment/Questions


// Question 1: How long do you want the password be?
  var length = prompt(
    "How many characters will your password be? Enter a number between 8 and 128"
  );
  console.log(length);
  // Checks if the password meets requirement 
  if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128");
    return generatePassword();
  }

// Question 2: "Do you want lowercase charaters included?"
  var wantLower = confirm("Do you want lowercase charaters included?");
  console.log(wantLower);
  if (wantLower == true) {
    for (var i = 0; i < lowercaseBase.length; i++) {
      temp.push(lowercaseBase[i]);
    }
  }
  // Question 3: "Do you want uppercase charaters included?"
  var wantUpper = confirm("Do you want uppercase charaters included?");
  console.log(wantUpper);
  if (wantUpper == true) {
    for (var i = 0; i < uppercaseBase.length; i++) {
      temp.push(uppercaseBase[i]);
    }
  }
  // Question 4: "Do you want special characters included?"
  var wantSpecial = confirm("Do you want special charaters included?");
  console.log(wantSpecial);
  if (wantSpecial == true) {
    for (var i = 0; i < specialBase.length; i++) {
      temp.push(specialBase[i]);
    }
  }
// Question 5: "Do you want numbers included?"
  var wantNumber = confirm("Do you want numbers included?");
  console.log(wantNumber);
  if (wantNumber == true) {
    for (var i = 0; i < numberBase.length; i++) {
      temp.push(numberBase[i]);
    }
  }

  console.log(temp);

  for (var i = 0; i < length; i++) {
    passwordBase = passwordBase + temp[Math.floor(Math.random() * temp.length)];
  }

  return passwordBase;
}


// The password generate process
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event Listener 
generateBtn.addEventListener("click", writePassword);
