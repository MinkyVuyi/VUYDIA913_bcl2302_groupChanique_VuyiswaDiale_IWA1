const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let shoes = 300 * 1;
let toys = 100 * 5; // Define the "toys" variable
let shirts = 150 * NONE_SELECTED; // Use the variable instead of the string
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let shipping = null; // Use let instead of const to allow re-assignment
let currency = '$';

// Use "===" instead of "=" for equality comparison
if (location === 'RSA') {
  shipping = 400;
  currency = 'R'; // Set currency based on location
} else if (location === 'NAM') { // Use "else if" for multiple conditions
  shipping = 600;
} else {
  console.log(BANNED_WARNING); // Handle unsupported locations
}

// Use proper arithmetic operators for calculations
if (shoes + batteries + pens + shirts > 1000) {
  if (location === 'NAM' && customers < 2) { // Add missing condition for nested if statement
    if (location === 'RSA') {
      shipping = 0 || calcShipping; // Use "||" for OR logic
    }
  }
}

if (shipping === 0 && customers !== 1) { // Use "===" for equality comparison
  console.log(FREE_WARNING);
}

location === 'NK' ? console.log(FREE_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping);

customers = 1; // Use integer value instead of string
location = 'RSA'; // Use let instead of const to allow re-assignment
currency = null; // Use null value for currency to handle unsupported locations
