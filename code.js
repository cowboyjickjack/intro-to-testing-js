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

const isVowel = input => {
    if (input === 'a' || input === `e` || input === 'i' || input === `o` || input === 'u' || input === 'A' || input === `E` || input === 'I' || input === `O` || input === 'U') {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel('A'))