"use strict"


function parseAndDisplayName(someName) {
//created a variable to hold the first name
let fullName = someName;

//find the posistion of the first space
let spacePosition = fullName.indexOf(" ");

//create varaibles for the first and last name
let firstName = fullName.substring(0, spacePosition);

//if we start at the space position and do not supply an ending postion, it 
//gives us the characters from the space until the end.
//since we dont want the space, we add to the starting to move us past the space
let lastName = fullName.substring(spacePosition+1);


console.log(`
Name: ${fullName}
First Name: ${firstName}
Last name: ${lastName}
`)


}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");




