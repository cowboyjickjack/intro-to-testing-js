// helloWorld function
function helloWorld(input) {
    if (input === undefined || input === true || input === false) {
        return "Hello, World!";
    } else {
        return `Hello, ${input}!`;
    }
}

const isFive = input => {
    if (typeof input === "string") {
        return false;
    } else if (input === 5) {
        return true;
    }
}

console.log(isFive());
