const person = ['shimul', 'joy','habib','shimul','junayed','joy','habiba',];

const numbers = [34,56,78,23,45,34,78] ;

function removeDuplicate(array){
    const newArray = []
    for(const item of array){
        if(newArray.includes(item)=== false){
            newArray.push(item);
        }
    }
    return newArray;
}

const result = removeDuplicate(numbers);
console.log(result)