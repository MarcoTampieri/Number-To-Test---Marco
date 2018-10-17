
let inputNumber = prompt("Please enter a number between 0 and 999");

function translate(inputNumber) {
    let hundreds = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let unitsAndTeens = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "elven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    while (inputNumber < 0 || inputNumber > 999 || inputNumber === false || isNaN(inputNumber)) {
        alert("Not recognised.");
        prompt(inputNumber);
    };

    let unita = inputNumber % 10;
    let decine = inputNumber / 10 % 10;
    let centinaia = inputNumber / 100 % 10;

    switch (unita) {
        case "0":
            let u0 = unitsAndTeens[0];
            break;
        case "1":
            let u1 = unitsAndTeens[1];
            break;
        case "2":
            let u2 = unitsAndTeens[2];
            break;
        case "3":
            let u3 = unitsAndTeens[3];
            break;
        case "4":
            let u4 = unitsAndTeens[4];
            break;
        case "5":
            let u5 = unitsAndTeens[5];
            break;
        case "6":
            let u6 = unitsAndTeens[6];
            break;
        case "7":
            let u7 = unitsAndTeens[7];
            break;
        case "8":
            let u8 = unitsAndTeens[8];
            break;
        case "9":
            let u9 = unitsAndTeens[9];
            break;
        case "10":
            let u10 = unitsAndTeens[10];
            break;
        case "11":
            let u11 = unitsAndTeens[11];
            break;
        case "12":
            let u12 = unitsAndTeens[12];
            break;
        case "13":
            let u13 = unitsAndTeens[13];
            break;
        case "14":
            let u14 = unitsAndTeens[14];
            break;
        case "15":
            let u15 = unitsAndTeens[15];
            break;
        case "16":
            let u16 = unitsAndTeens[16];
            break;
        case "17":
            let u17 = unitsAndTeens[17];
            break;
        case "18":
            let u18 = unitsAndTeens[18];
            break;
        case "19":
            let u19 = unitsAndTeens[19];
            break;

    };

    switch (decine) {
        case "0":
            let d0 = unitsAndTeens[0];
            break;
        case "1":
            let d1 = unitsAndTeens[1];
            break;
        case "2":
            let d2 = unitsAndTeens[2];
            break;
        case "3":
            let d3 = unitsAndTeens[3];
            break;
        case "4":
            let d4 = unitsAndTeens[4];
            break;
        case "5":
            let d5 = unitsAndTeens[5];
            break;
        case "6":
            let d6 = unitsAndTeens[6];
            break;
        case "7":
            let d7 = unitsAndTeens[7];
            break;
        case "8":
            let d8 = unitsAndTeens[8];
            break;
        case "9":
            let d9 = unitsAndTeens[9];
            break;
        case "10":
            let d10 = unitsAndTeens[10];
    };

    switch (decine) {
        case "0":
            let c0 = unitsAndTeens[0];
            break;
        case "1":
            let c1 = unitsAndTeens[1];
            break;
        case "2":
            let c2 = unitsAndTeens[2];
            break;
        case "3":
            let c3 = unitsAndTeens[3];
            break;
        case "4":
            let c4 = unitsAndTeens[4];
            break;
        case "5":
            let c5 = unitsAndTeens[5];
            break;
        case "6":
            let c6 = unitsAndTeens[6];
            break;
        case "7":
            let c7 = unitsAndTeens[7];
            break;
        case "8":
            let c8 = unitsAndTeens[8];
            break;
        case "9":
            let c9 = unitsAndTeens[9];
            break;
        case "10":
            let c10 = unitsAndTeens[10];
    }
}