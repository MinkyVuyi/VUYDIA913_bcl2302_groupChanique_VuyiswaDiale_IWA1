const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'


// Only change below this line

const owed = 'R' + (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2) //Used 
const leo = `${leoName} ${leoSurname.trim()} (Owed R${Math.abs(leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R${Math.abs(sarahBalance).toFixed(2)})\n`
const total = "\n\tTotal amount owed: "
const result = `${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n\n${divider}`

console.log(result)

/* 
* Calculated total owed by adding absolute values of leoBalance and sarahBalance, convert it to a string with two decimal places and prepend 'R'
* Created a string for Leo's name and surname with 'Owed R' followed by the absolute value of leoBalance with two decimal places
* Created a string for Sarah's name and surname with 'Owed R' followed by the absolute value of sarahBalance with two decimal places, and append a newline character
* Created a string for the total amount owed with a tab and 'Total amount owed: '
* Concatenated Leo's string, Sarah's string, divider, total amount owed, and divider to create the final result string
* Output the result string to the console
*/



//What I was required to do

/*
* The following code is meant to output as a single value 
* (only a single console.log) but split into three different lines.
*/
