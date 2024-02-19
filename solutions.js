// Sum of Two Numbers
function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log("Los datos de entrada no son adecuados");
        return;
    } else {
        return a + b;
    }
}

// Factorial of a Number
function factorial(n) {
    if (typeof n !== "number") {
        console.log("Los datos de entrada no son adecuados");
        return;
    }

    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Find the Largest Number
function findLargest(arr) {
    arr.forEach((e) => {
        if (typeof e !== "number") {
            console.log("Los datos de entrada no son adecuados");
            return;
        }
    });

    if (arr.length == 0) {
        return 0;
    }

    return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
    if (typeof str !== "string") {
        console.log("Los datos de entrada no son adecuados");
        return;
    }

    const strArr = str.toString().split("");
    let count = 0;

    strArr.forEach((element) => {
        if (element.match("^[aeiouAEIOU]$")) {
            count++;
        }
    });

    return count;
}

// Check if a Number is Prime
function isPrime(n) {
    if (typeof n !== "number") {
        console.log("Los datos de entrada no son adecuados");
        return;
    }

    if (n == 0 || n == 1) {
        return false;
    }

    for (let i = n - 1; i >= 2; i--) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = {
    sum,
    factorial,
    findLargest,
    countVowels,
    isPrime,
};
