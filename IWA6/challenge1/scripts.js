const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/*Used a for loop
*used let because primaryValid changes
*initialized let i=0, setting a new variable called i and set it to 0
*isNaN() is to check if the character is a number
*primaryPhone[i] selects the current character fo the primaryPhone currently is on 0
*parseInt(primaryPhone[i]) 
*/

let primaryValid = true
for (let i = 0; i < primaryPhone.length; i++) {
  if (isNaN(parseInt(primaryPhone[i]))) { 
    primaryValid = false // parseInt() to convert the character to a number
    break
  }
}

let secondaryValid = true
for (let i = 0; i < secondaryPhone.length; i++) {
  if (isNaN(parseInt(secondaryPhone[i]))) { 
    secondaryValid = false
    break
  }
}

console.log('Primary phone is a valid numerical string:', primaryValid )
console.log('Secondary phone is a valid numerical string:', secondaryValid )