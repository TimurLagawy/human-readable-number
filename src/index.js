module.exports = function toReadable(number) {
    let num = Math.floor(number / 100) + "";
    let hundr = "";

    if (num == 9) {
        hundr += "nine hundred";
    } else if (num == 8) {
        hundr += "eight hundred";
    } else if (num == 7) {
        hundr += "seven hundred";
    } else if (num == 6) {
        hundr += "six hundred";
    } else if (num == 5) {
        hundr += "five hundred";
    } else if (num == 4) {
        hundr += "four hundred";
    } else if (num == 3) {
        hundr += "three hundred";
    } else if (num == 2) {
        hundr += "two hundred";
    } else if (num == 1) {
        hundr += "one hundred";
    }
    let unit;
    if (number < 10) {
        unit = "";
    } else {
        unit = " ";
    }
    if (Math.floor(number % 10) == 9) {
        unit += "nine";
    } else if (Math.floor(number % 10) == 8) {
        unit += "eight";
    } else if (Math.floor(number % 10) == 7) {
        unit += "seven";
    } else if (Math.floor(number % 10) == 6) {
        unit += "six";
    } else if (Math.floor(number % 10) == 5) {
        unit += "five";
    } else if (Math.floor(number % 10) == 4) {
        unit += "four";
    } else if (Math.floor(number % 10) == 3) {
        unit += "three";
    } else if (Math.floor(number % 10) == 2) {
        unit += "two";
    } else if (Math.floor(number % 10) == 1) {
        unit += "one";
    } else if (unit == " " || unit == "") {
        unit = "";
    }
    let dozen;
    if (number < 100) {
        dozen = "";
    } else {
        dozen = " ";
    }

    if (Math.floor((number % 100) / 10) == 9) {
        dozen += "ninety" + unit;
    } else if (Math.floor((number % 100) / 10) == 8) {
        dozen += "eighty" + unit;
    } else if (Math.floor((number % 100) / 10) == 7) {
        dozen += "seventy" + unit;
    } else if (Math.floor((number % 100) / 10) == 6) {
        dozen += "sixty" + unit;
    } else if (Math.floor((number % 100) / 10) == 5) {
        dozen += "fifty" + unit;
    } else if (Math.floor((number % 100) / 10) == 4) {
        dozen += "forty" + unit;
    } else if (Math.floor((number % 100) / 10) == 3) {
        dozen += "thirty" + unit;
    } else if (Math.floor((number % 100) / 10) == 2) {
        dozen += "twenty" + unit;
    } else if (Math.floor((number % 100) / 10) == 1) {
        if (number % 100 == 19) {
            dozen += "nineteen";
        } else if (number % 100 == 18) {
            dozen += "eighteen";
        } else if (number % 100 == 17) {
            dozen += "seventeen";
        } else if (number % 100 == 16) {
            dozen += "sixteen";
        } else if (number % 100 == 15) {
            dozen += "fifteen";
        } else if (number % 100 == 14) {
            dozen += "fourteen";
        } else if (number % 100 == 13) {
            dozen += "thirteen";
        } else if (number % 100 == 12) {
            dozen += "twelve";
        } else if (number % 100 == 11) {
            dozen += "eleven";
        } else if (number % 100 == 10) {
            dozen += "ten";
        }
    } else if (dozen == " " || dozen == "") {
        dozen = "" + unit;
    }
    if (number == 0) {
        hundr = "zero";
    }
    return hundr + dozen;
};
