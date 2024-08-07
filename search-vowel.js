
function searchNumber(array){
    const searchNumber = 3;

    let count = 0;

    for(let i = 0; i < array.length ;i++){
        if(array[i] === searchNumber){
            count ++
        }
    }
    return count;
}

const numberArray =[5,78,3,3,24,67,5,45,78,6,7,2,3,3,3,5,6,2,8,];
const result2 =searchNumber(numberArray);
// console.log(result2);

show same number of an array 

