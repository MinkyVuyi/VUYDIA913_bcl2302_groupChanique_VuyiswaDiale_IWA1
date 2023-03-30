const year = 2050; //changed date to year = 2050 and all the other values with date on this file
let status = 'student';
let count = 0;

if (year === 2050) { //used (===) strict equality to compare values
  console.log("January", 'New Year’s Day'); //added a missing closing bracket
  console.log("March", 'Human Rights Day');
  const month = 'April'; // Use const instead of let and declare a variable to store the month
  console.log(month, 'Family Day'); //changed date to month
  console.log(month, 'Freedom Day');
  count += 4; // Use shorthand operator to increment count 

  if (status === "student") { //status is declared deprecated meaning is outdated
    console.log('June', 'Youth Day');
    count += 1;
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  const decMonth = 'December'; // Declare a variable to store the month
  console.log(decMonth, 'Day of Reconciliation');
  count += 3;

  if (status === "parent") {
    console.log(decMonth, 'Christmas Day');
    count += 1;
  }

  console.log(decMonth, 'Day of Goodwill');
  count += 1;
}

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);

