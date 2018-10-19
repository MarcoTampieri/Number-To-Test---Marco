let inputNumber = prompt("Please enter a number between 0 and 999");

function translate(inputNumber) {
    let hundreds = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let tens = ["", "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let unitsAndTeens = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "",
        "elven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    inputNumber = parseInt(inputNumber);

    while (inputNumber < 0 || inputNumber > 999 || inputNumber === false || isNaN(inputNumber)) {
        alert("Not recognised.");
        inputNumber = prompt("Please enter a number between 0 and 999");
    };

    if (inputNumber === 0) {
        return ("zero");
    };

    let unita = inputNumber % 10;
    let decine = inputNumber / 10 % 10;
    let centinaia = inputNumber / 100 % 10;

    decine = Math.floor(decine);
    centinaia = Math.floor(centinaia);
    console.log(centinaia, decine, unita);

    let u;
    let d;
    let c;

    switch (centinaia) {
        case 0:
            c = hundreds[0];
            break;
        case 1:
            c = hundreds[1];
            break;
        case 2:
            c = hundreds[2];
            break;
        case 3:
            c = hundreds[3];
            break;
        case 4:
            c = hundreds[4];
            break;
        case 5:
            c = hundreds[5];
            break;
        case 6:
            c = hundreds[6];
            break;
        case 7:
            c = hundreds[7];
            break;
        case 8:
            c = hundreds[8];
            break;
        case 9:
            c = hundreds[9];
            break;
        case 10:
            c = hundreds[10];
    };

    switch (decine) {
        case 0:
            d = tens[0];
            break;
        case 1:
            d = 1;
            break;
        case 2:
            d = tens[2];
            break;
        case 3:
            d = tens[3];
            break;
        case 4:
            d = tens[4];
            break;
        case 5:
            d = tens[5];
            break;
        case 6:
            d = tens[6];
            break;
        case 7:
            d = tens[7];
            break;
        case 8:
            d = tens[8];
            break;
        case 9:
            d = tens[9];
            break;
        case 10:
            d = tens[10];
    };

    if (d == 1) {
        d = tens[0];
        switch (unita) {
            case 1:
                u = unitsAndTeens[11];
                break;
            case 2:
                u = unitsAndTeens[12];
                break;
            case 3:
                u = unitsAndTeens[13];
                break;
            case 4:
                u = unitsAndTeens[14];
                break;
            case 5:
                u = unitsAndTeens[15];
                break;
            case 6:
                u = unitsAndTeens[16];
                break;
            case 7:
                u = unitsAndTeens[17];
                break;
            case 8:
                u = unitsAndTeens[18];
                break;
            case 9:
                u = unitsAndTeens[19];
                break;
        };
    } else {
        switch (unita) {
            case 1:
                u = unitsAndTeens[1];
                break;
            case 2:
                u = unitsAndTeens[2];
                break;
            case 3:
                u = unitsAndTeens[3];
                break;
            case 4:
                u = unitsAndTeens[4];
                break;
            case 5:
                u = unitsAndTeens[5];
                break;
            case 6:
                u = unitsAndTeens[6];
                break;
            case 7:
                u = unitsAndTeens[7];
                break;
            case 8:
                u = unitsAndTeens[8];
                break;
            case 9:
                u = unitsAndTeens[9];
                break;
        };
    }
    console.log(c, d, u);
    console.log(inputNumber);

    if (centinaia > 0) {
        return (c + " hundred " + d + " " + u);
    } else {
        return (d + " " + u);
    };
};
alert(translate(inputNumber));