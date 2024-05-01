"use strict"

function getSocSecTax(somePay){
    let grossPay = somePay;
    let socialTax = grossPay * .062;

    return socialTax.toFixed(2)
}


function getMedicareTax(somePay){
    let grossPay = somePay;
    let medicareTax = grossPay * .0145;

    return medicareTax.toFixed(2)
}


function getFederalTax(somepay , code){
    let grossPay = somepay
    let taxRate = 0

    if(code === 0){
        taxRate = 23 / 100
    }
    else if(code === 1){
        taxRate = 21 / 100
    }
    else if(code === 2){
        taxRate = 19.5 / 100
    }
    else if(code === 3){
        taxRate = 18.5 /100
    }
    else if(code){
        taxRate =.18-(code -4) * .005
     }

let taxAmount = grossPay * taxRate;

return taxAmount.toFixed(2);
}




console.log(getSocSecTax(750))
console.log(getSocSecTax(1550))
console.log(getSocSecTax(1100))

console.log(getMedicareTax(750))
console.log(getMedicareTax(1550))
console.log(getMedicareTax(1100))

console.log(getFederalTax(750,0))
console.log(getFederalTax(1550,2))
console.log(getFederalTax(1100,6))