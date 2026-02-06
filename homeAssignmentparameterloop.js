function userProfile(name){

console.log(name);

}
userProfile("Hello")

// Case 2
const double = num => num * 2;
console.log(double(5));
console.log(double(8));

// Case 3 
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Case 4
function getUserData(callback) {
    setTimeout(function () {
        callback();
    }, 3000);
}

getUserData(function () {
    console.log("Call Back Function");
});