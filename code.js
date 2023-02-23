// helloWorld function
function helloWorld(input) {
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    } else {
        return "Hello, ${input}!";
    }
}

console.log(helloWorld(true))