//find a leap year 
function leapYear(years){
    const year = years % 4;
    if(years % 400 === 0 || years % 100 !== 0 && year === 0 ){
        console.log('This year is leap year')
    }
    else{
        console.log('This year not a leap-year')
    }
}

leapYear(2034);