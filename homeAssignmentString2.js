function lengthOfLastWord(s) {
    let words = s.split(" ");    
    let lastWord = words[words.length - 1]; 
    return lastWord.length;       
}

console.log(lengthOfLastWord("Hello World"));

//Case 2

function lengthOfLastWordTrim(s) {
    let trimmedStr = s.trim();         
    let words = trimmedStr.split(" ");  
    let lastWord = words[words.length - 1]; 
    return lastWord.length;             
}

console.log(lengthOfLastWordTrim(" fly me to the moon ")); 

// Case 3

function isAnagram(str1, str2) {
    let s1 = str1.toLowerCase().split("").sort().join(""); 
    let s2 = str2.toLowerCase().split("").sort().join(""); 

    return s1 === s2; // Steps 3 & 4
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));  