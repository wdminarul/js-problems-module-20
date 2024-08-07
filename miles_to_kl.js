function milesToKl(miles){
    let km = miles * 1.60934;

    return km
}

const mlToKm = milesToKl(24).toFixed(2);
const kilometer = parseFloat(mlToKm);

console.log(kilometer);