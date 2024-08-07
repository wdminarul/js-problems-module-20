//Write a function to convert temperature from Celsius to Fahrenheit.
// cels = (fahr - 32.0) * 5.0/9.0; //Fahr to cels
// fahr = (cels * 9.0/5.0) + 32.0; //Cels to fahr  

function cels(frh){
    const celsias = (frh - 32.0) * 5.0/9.0;
    return celsias;
}

console.log(cels(108))


function frhr(cel){
    const farenhite = (cel * 9.0/5.0) + 32.0;
    return farenhite;
}

const inti = frhr(57).toFixed(2);
console.log(parseFloat(inti));
