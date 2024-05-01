"use strict"

function convertFtoC (someTemp){
    
    //setup variables for farenheight to celcius
    let fahrenheit = someTemp;
    let celsius = (fahrenheit - 32) * 5 / 9;

    //return the value of the calc as output from the function
    return celsius;
}

console.log( convertFtoC (212) );
console.log( convertFtoC (90) );
console.log( convertFtoC (72) );
console.log( convertFtoC (32) );
console.log( convertFtoC (0) );
console.log( convertFtoC (-40) );

function convertCtoF (aTemp){
    
    let celsius = aTemp;
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

console.log( convertCtoF (100) );
console.log( convertCtoF (45) );
console.log( convertCtoF (19) );
console.log( convertCtoF (0) );
console.log( convertCtoF (-7) );
console.log( convertCtoF (-40) );