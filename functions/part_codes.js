"use strict"




function getSupplier(code) {
let  newCode = code
let supplier = newCode.substring(0,4);

return supplier
}


function getProductNumber(code){
let newCode = code
let number = newCode.substring(5,8)

return number
}

function getSize(code) {
    let newCode = code
    let size = newCode.substring(9)

return size
}

let code = "ACME:123-L"

console.log(`the large (${getSize(code)}) part ${getProductNumber(code)} is supplied by ${getSupplier(code)}`)
