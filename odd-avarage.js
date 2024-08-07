// in this array how many odds number have and give me odds numbers avarage

function oddAvg(numbers){
    // console.log(numbers)
    const neArray = [];
    let num = 0;
    for(const number of numbers){
        // console.log(number)
        if(number % 2 === 1){
            neArray.push(number);
            num = num + number;
            
        }
        else{

        }
    }
    const avgOfOdd = num / 2;
    console.log('this is avarage number of this odd numbers',avgOfOdd);
    
    return neArray;
}

const array = [23,78,34,55,98,37,93];
// oddAvg(array)
console.log('This is a array of main array odd numbers',oddAvg(array));

