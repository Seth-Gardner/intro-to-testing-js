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