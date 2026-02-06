let reversedString = "";

function revString(str) {
    reversedString = "";   // reset every time

    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
}

let originalString = "Nitin";

revString(originalString);

if (originalString === reversedString) {
    console.log("This is a palindrome");
} else {
    console.log("This is not a palindrome");
}

console.log(reversedString);
