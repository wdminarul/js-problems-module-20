// this is inch to feet convert function 
function inchesToFeet(inches) {
    // Convert inches to feet
    let feet = inches / 12;
    
    return feet;
}

const feetNumber = inchesToFeet(48.5).toFixed(2);
const convertFeet = parseFloat(feetNumber)

console.log(convertFeet);