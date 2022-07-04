
  
 
var assocArr = [];
 
assocArr[0] = new Array("", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");
 
assocArr["d"] = new Array("ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
"sixteen", "seventeen", "eighteen", "nineteen");
 
assocArr[1] = new Array("", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty",
"ninety");
 
assocArr[2] = new Array("", "one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred",
"seven hundred", "eight hundred", "nine hundred");
 

/*
 
 * Converting
 
 *      nubmer from numeric to text representation
 
 *
 
 * @param {number} number for conversion
 
 * @return {text} converted string
 
 *
 
 */
module.exports = function toReadable (number) {
// function numToWord(number) {
 
    var resp = "",
 
        numArr = [],
 
        flag = true;
 
    // Checking the input conditions
 
    if (isNaN(number) || number < 1 || number > 999) {
 
        return "Invalid input!";
 
    }
 
    // Convert input number to array of digits
 
    for (; number != 0; number = Math.floor(number / 10)) {
 
        numArr.push(number % 10);
 
    }
 
    // Iterate all digits from the end
 
    for (var i = numArr.length - 1; i >= 0 ; i--) {
 
        if (flag) {
 
            if (numArr[i] == 1 && i == 1 || numArr[i] == 1 && i == 4) {
 
                flag = false;
 
            } else {
 
                resp += digitToWord(i, numArr[i], 0);
 
            }
 
        } else {
 
            resp += digitToWord("d", numArr[i], i);
 
            flag = true;
 
        }
 
    }
 
    return resp.trim();
 
}
 
function digitToWord(digit, offset, char) {
 
    var resp = "";
 
    switch (digit) {
 
        case 3:
 
            resp += (offset == 1 || offset == 2 ? assocArr["s"][offset] : assocArr[0][offset]) + " ";
 
            break;
 
        case 4:
 
            digit = 1;
 
            break;
 
        case "d":
 
            resp += assocArr[digit][offset] + " ";
 
            digit = char;
 
            offset = 0;
 
            break;
 
    }
 
    return resp + assocArr[digit][offset] + " ";
 
}



 

