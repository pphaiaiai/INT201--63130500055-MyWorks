let year = 2001;

switch (year %12){
    case 0 : console.log("monkey");
    break;

    case 1 : console.log("rooster");
    break;

    case 2 : console.log("dog");
    break;

    case 3 : console.log("pig");
    break;

    case 4 : console.log("rat");
    break;

    case 5 : console.log("ox");
    break;

    case 6 : console.log("tiger");
    break;

    case 7 : console.log("rabbit");
    break;

    case 8 : console.log("dragon");
    break;

    case 9 : console.log("snake");
    break;

    case 10 : console.log("horse");
    break;

    case 10 : console.log("sheep");
    break;
}

let reverseStr = (str) => str.split("").reverse().join("");
let replaceVowels = (str) => str.replace(/[aeiou]/gi, "*");
let countVowels = (str) => str.match(/[aeiou]/gi).length;
let menu = (select, str) => [reverseStr,replaceVowels,countVowels][select-1](str);

console.log(menu(1, "Hello World"))
console.log(menu(2, "Hello World"))
console.log(menu(3, "Hello World"))

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

let myString = 'Hello World';

function myCount() {
    let count = 0;
    for (i = 0; i < myString.length; i++) {
        switch (myString[i]) {
            case 'A':
                count++;
                break;
            case 'a':
                count++;
                break;
            case 'E':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'I':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'O':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'U':
                count++;
                break;
            case 'u':
                count++;
                break;
        }
    }
    console.log(count);
}

myCount(myString);