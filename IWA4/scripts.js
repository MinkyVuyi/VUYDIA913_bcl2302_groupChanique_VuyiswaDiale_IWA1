
const date = 2050 // Use const instead of let and assign a value
const status = 'student' // Use const instead of let and assign a value
let count = 0 // Use let to allow changing the value later

if (date === 2050) { // Use strict equality operator instead of assignment
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	const month = 'April' // Use const instead of let and declare a variable to store the month
	console.log(month, 'Family Day')
	console.log(month, 'Freedom Day')
	count += 4 // Use shorthand operator to increment count

	if (status === "student") { // Use strict equality operator instead of assignment
	  console.log('June', 'Youth Day')
		count += 1 // Use shorthand operator to increment count
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	const december = 'December' // Declare a variable to store the month
	console.log(december, 'Day of Reconciliation')
	count += 3 // Use shorthand operator to increment count

	if (status === "parent") { // Use strict equality operator instead of assignment
	  console.log(december, 'Christmas Day')
		count += 1 // Use shorthand operator to increment count
  }

	console.log(december, 'Day of Goodwill')
	count += 1 // Use shorthand operator to increment count
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)
