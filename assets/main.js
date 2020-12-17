let retVal;

/*
TO-DO:

-Need to add a checkbox asking what kinds of characters they would like to be in their password and re-write algorithm based on that.
-Need to figure out display (Tim will post html source in gitlab)
-Need to figure out copy-text function
-Need to add working footer

*/


//gets desired password length from html form

//Check user's desired characters
function wantsLowercase() {
    if (document.getElementById("lowercase-check").checked) {
        return true;
    } else {
        return false;
    }
}

function wantsUppercase() {
    if (document.getElementById("uppercase-check").checked) {
        return true;
    } else {
        return false;
    }
}

function wantsNumbers() {
    if (document.getElementById("numbers-check").checked) {
        return true;
    } else {
        return false;
    }
}

function wantsSymbols() {
    if (document.getElementById("symbols-check").checked) {
        return true;
    } else {
        return false;
    }
}
//end character check

//generates the password randomly from array
function generatePassword() {
    let charsetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //lowercase
    let charsetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //uppercase
    let charsetNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; //numbers
    let charsetSymb = ['!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}']; //symbols

    //declare length for easier functions
    let lowerLength = charsetLower.length;
    let upperLength = charsetUpper.length;
    let numLength = charsetNum.length;
    let symbLength = charsetSymb.length;

    let passwordLength = document.getElementById("password-length").value;
    retVal = '';

    //generate the password
    for (let i = 0; i < passwordLength; i++) {
        let x = Math.floor(Math.random() * Math.floor(4));
        switch (x) {
            case 0:
                if (wantsLowercase() === true) {
                    retVal += charsetLower[Math.floor(Math.random() * Math.floor(lowerLength))];
                }
                break;
            case 1:
                if (wantsUppercase() === true) {
                    retVal += charsetUpper[Math.floor(Math.random() * Math.floor(upperLength))];
                }
                break;
            case 2:
                if (wantsNumbers() === true) {
                    retVal += charsetNum[Math.floor(Math.random() * Math.floor(numLength))];
                }
                break;
            case 3:
                if (wantsSymbols() === true) {
                    retVal += charsetSymb[Math.floor(Math.random() * Math.floor(symbLength))];
                }
                break;
            default:
                console.log('error in for loop, function generatePassword');
        }
    }
    document.getElementById("password").innerHTML = retVal; //passes generated password into html
    return retVal;
}

//Changes color of length based on recommended length
function changeColor() {
    if (document.getElementById("value").value < 12) {
        document.getElementById("value").style.color = 'red';
    } else if (document.getElementById("value").value < 22) {
        document.getElementById("value").style.color = 'orange';
    } else {
        document.getElementById("value").style.color = 'green';
    }
}