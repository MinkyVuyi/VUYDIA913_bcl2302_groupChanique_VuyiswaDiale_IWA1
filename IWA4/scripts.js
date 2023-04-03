const year = 2050; //Changed the date into year
const status = 'student';
let count = 0; // Initialize `count` variable with 0 and used let instead of const as this changes


if (year === 2050) { // Use `===` (strict equality) for comparison instead of `=` for assignment
	console.log("January", 'New Year’s Day'); // Added missing `)` at the end of the line
	console.log("March", 'Human Rights Day');
	let month = 'April'; // Declare a new variable to hold month instead of date
	console.log(month, 'Family Day'); // Use `month` variable instead of date
	console.log(month, 'Freedom Day');
	count += 4; // Use `+=` for shorthand to increment `count`

	if (status === "student") { // Use `===` for comparison instead of `=` for assignment
	  console.log('June', 'Youth Day');
		count ++; // Use `++` for shorthand to increment `count`
  }

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');
	month = 'December'; // Update `month` variable with new value instead of using date
	console.log(month, 'Day of Reconciliation');
	count += 3; // Use `+=` for shorthand to increment `count`

	if (status === "parent") { // Use `===` for comparison instead of `=` for assignment
	  console.log(month, 'Christmas Day');
		count ++; // Use `++` for shorthand to increment `count`
  }

	console.log(month, 'Day of Goodwill');
	count ++; // Use `++` for shorthand to increment `count`
}

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);
