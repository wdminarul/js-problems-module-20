//Write a function to convert temperature from Celsius to Fahrenheit.
// cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
// fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr  

function cels(frh){
    const celsias = (frh - 32.0) * 5.0/9.0;
    return celsias;
}

// console.log(cels(108))


function frhr(cel){
    const farenhite = (cel * 9.0/5.0) + 32.0;
    return farenhite;
}

const inti = frhr(57).toFixed(2);
// console.log(parseFloat(inti));


// You are given an array of numbers. Count how many times the a number is repeated in the array.
function countOccurrences(numbers, target) {
    // Initialize a count variable to keep track of occurrences
    let count = 0;

    // Loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current number matches the target, increment the count
        if (numbers[i] === target) {
            count++;
        }
    }

    return count;
}

// Example usage:
const numbers = [5, 6, 11, 12, 98, 5,];
const target = 5;
const result = countOccurrences(numbers, target);
// console.log('The number of search value', result);  // Output: 2

// Write a function to count the number of vowels in a string.

function countVowels(str) {
    // Define a string containing all vowels (both uppercase and lowercase)
    const vowels = 'aeiouAEIOU';
    
    // Initialize a count variable to keep track of vowel occurrences
    let count = 0;

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
const inputString = 'This is a demo content'
const result2 = countVowels(inputString);
console.log(result2);  // Output: 3


function getRandomNumber(min, max) {
    // Ensure the min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNumber = getRandomNumber(10, 20);
console.log(randomNumber);  // Output: a random integer between 10 and 20 (inclusive)


