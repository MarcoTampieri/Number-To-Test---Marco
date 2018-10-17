
let inputNumber = prompt("Please enter a number between 0 and 999");

function translate (inputNumber) {
    let hundreds = "hundred"
    let tens = ["ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let unitsAndTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine","elven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    if (inputNumber < 0 || inputNumber > 999 || inputNumber === false || isNaN(inputNumber)) {
        alert("Not recognised.");
        location.reload();
    } else if (inputNumber >= 0 && inputNumber <= 999 && Number.isInteger(inputNumber)) {
        let inputArray = inputNumber.split("");
            
    }
}