const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

//Removed the last comma in all objects
const expenses = {
    food: 51.7501,
    transport:  10.2
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%'
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100 // used parseInt() function with the value at index 913 of the tax array as the argument
const startingAfterTax = salary * (1 - taxAsDecimal) //I have put 1 - taxAsDecimal in brackets for better reading.
const type = lodging + size
const balance = startingAfterTax - expenses.transport - expenses.food - rent['large-apartment'] 
/* Removed brackets and used . instead so that the code consoles.
* Used [] as an object property access to access properties of an object.
*/

console.log(balance.toFixed(2)) //I have set the balance to 2 decimal places




//What I was required to do

/*
*Once again, you will need to ensure that the following behaviour works:

The taxable amount should be subtracted from the salary before expenses are calculated
The total should be the result of the after-tax amount with all expenses subtracted
*/
