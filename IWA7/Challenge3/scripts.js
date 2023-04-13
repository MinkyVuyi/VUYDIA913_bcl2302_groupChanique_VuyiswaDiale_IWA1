const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'


// Only change below this line

const owed = 'R' + (Math.abs(leoBalance) + Math.abs(sarahBalance)).toFixed(2) //Used math.abs variables to get the absolute value and have set the answer to 2 decimal places
const leo = `${leoName} ${leoSurname.trim()} (Owed R${Math.abs(leoBalance).toFixed(2)})` //USed .trim() to cut out the space after leoSurname
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed R${Math.abs(sarahBalance).toFixed(2)})\n` //Used \n for a new line
const total = "\n\tTotal amount owed: " //Used \t for a new tab
const result = `${leo}\n${sarah}\n\n${divider}\n${total}${owed}\n\n${divider}`

console.log(result)
