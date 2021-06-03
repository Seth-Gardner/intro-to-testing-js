// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if(name === undefined || typeof(name) === "boolean"){
        return "Hello, World!"
    } else{
        return "Hello, " + name + "!";
    }
}
function isFive(num) {
    return num === 5;
}
function isEven(num) {
    if(num === false){return false}else{return num % 2 === 0}
}
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].indexOf(c) !== -1
}