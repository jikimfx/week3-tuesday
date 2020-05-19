const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

let result = [];

//Filter

console.log("Print out an array of the inventors whose name starts with 'A'");
result = inventors.filter(blah => blah.startsWith('A'));
console.log(result)

console.log("Print out an array of the inventors whose name contains 'n'");
result = inventors.filter(blah => blah.includes('n'));
console.log(result)

console.log("Print out an array of the inventors whose name has the same letter twice in a row(e.g.nn or mm)");
result = inventors.filter(blah => {
    let eachLetters = blah.split("");
    for (let i = 0; i < eachLetters.length; i++) {
        if (eachLetters[i] == eachLetters[i + 1])
            return blah;
    }
});
console.log(result);

console.log("Print out an array of the numbers which are odd");
result = numbers.filter(num => num % 2 == 1);
console.log(result);

console.log("Print out an array of the numbers that have two digits");
result = numbers.filter(num => (num >= 10 && num <= 99));
console.log(result);

console.log("Print out an array of the numbers which are prime");
result = numbers.filter(num => {
    if (num == 1) {
        return false;
    }
    else if (num == 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
})
console.log(result);

//Map

console.log("Print out the first name of each inventor");
result = inventors.map(blah => blah.split(" ", 1));
console.log(result);

console.log("Print out the length of every inventor's full name");
result = inventors.map(blah => blah.length);
console.log(result);

console.log("Print out all the inventors' names in uppercase");
result = inventors.map(blah => blah.toUpperCase());
console.log(result);

console.log("Print out initials of all inventors(e.g. A.E., I.N., ...");
result = inventors.map((blah) => {
    let eachName = blah.split(' ');
    return eachName.reduce((total, name) => {
        return total += name.charAt(0)
    }, '')

})
console.log(result);

console.log("Print out an array of every number multiplied by 100");
result = numbers.map(num => num * 100);
console.log(result);

//Sort

console.log("Sort all the inventors in alphabetical order, A-Z");
result = inventors.sort((a, b) => {
    if (a < b) return -1
    else if (b < a) return 1
    else return 0
})
console.log(result);

console.log("Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method");
result = inventors.sort((a, b) => {
    if (a < b) return 1
    else if (b < a) return -1
    else return 0
})
console.log(result);

console.log("Sort all the inventors by length of name, shortest name first");
result = inventors.sort((a, b) => {
    if (a.length < b.length) return -1
    else if (b.length < a.length) return 1
    else return 0
})
console.log(result);

console.log("Sort all the inventors by length of name, longest name first. Do not use the reverse method");
result = inventors.sort((a, b) => {
    if (a.length < b.length) return 1
    else if (b.length < a.length) return -1
    else return 0
})
console.log(result);

//Reduce

console.log("Find the sum of all the numbers");
result = numbers.reduce((total, num) => {
    return total + num;
})
console.log(result);

console.log("Find the sum of all the even numbers");
function getSum(total, num) {
    return total + (num % 2 == 0 ? num : 0);
}
result = numbers.reduce(getSum, 0);
console.log(result);

console.log("Create a string that has the first name of every inventor");
result = inventors.sort().reduce((string, item) => {
    return string + item.split(" ", 1);
}, "");
console.log(result);

//Some & Every

console.log("Does any inventor have the letter 'y' in their name?");
result = inventors.some((blah) => {
    return blah.search('y') > -1;
});
console.log(result);

console.log("Does every inventor have the letter 'e' in their name?");
result = inventors.every((blah) => {
    return blah.search('e') > -1;
});
console.log(result);

console.log("Does every inventor have first name that's longer than 4 characters?");
result = inventors.every((blah) => {
    return blah.split(" ")[0].length > 4;
});
console.log(result);

//Find & FindIndex

console.log("Find the inventor that has a middle name");
result = inventors.find((blah) => {
    return blah.split(" ").length > 2;
});
console.log(result);

console.log("Bonus: Return a new array, that only has inventors without a middle name. (Hint: think about splice, if you use findIndex. But you may also use another of the methods you've learned about above)");
result = inventors.filter((blah) => {
    return blah.split(" ").length == 2;
});
console.log(result);

console.log("Find the number divisible by 7");
result = numbers.find((num) => num % 7 == 0);
console.log(result);

console.log("Bonus: Return a new array, that only has the numbers that are not divisible by 7");
result = numbers.filter((num) => {
    return (num % 7 != 0) ? num : false;
})
console.log(result);

//Rocket

let fibNumber = prompt("Enter Fibonacci Number");

function getFib(fibNumber) {
    let a = 1, b = 0, temp;
    if (fibNumber == 0) return 0;
    else {
        while (fibNumber >= 1) {
            temp = a;
            a = a + b;
            b = temp;
            fibNumber--;
        }
        return b;
    }
}
alert(`Your Fib number is ${getFib(fibNumber)}`);