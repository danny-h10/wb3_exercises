"use strict"

function displayReceipet(totalDue, amountPaid){

    let changeDue = totalDue - amountPaid

    console.log(`${Math.abs(changeDue)}`);


}

displayReceipet(89,100)
displayReceipet(142.23,142.23)
displayReceipet(50.25, 20)