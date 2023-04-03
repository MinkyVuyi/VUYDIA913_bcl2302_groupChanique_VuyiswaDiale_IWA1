
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence' 
const NONE_SELECTED = '0'

let location = 'RSA'
const customers = 1
let currency = 'R'
let shipping = null //Set shipping to 0

/*Fixed the if statement into a more readable code
*Calculating the shipping cost based on the user's location
*Added currency according to the different locations
*/

if (location === 'RSA') {
    shipping = 400
    currency = 'R'
} else if (location === 'NAM') {
    shipping = 600
    currency = '$'
} else if (location === 'NK') {
    console.log(BANNED_WARNING) //Log a message that we do not ship to this country
} else {
    shipping = 800
    currency = '$'
}

//Items
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * 0
let batteries = 35 * 2
let pens = 5 * 0

// Calculate cost of items
let totalCost = shoes + toys + shirts + batteries + pens


if (location === 'RSA' || location === 'NAM') { //Checked the user's cost based on location
    const subtotal = totalCost - shipping;   
    if (subtotal >= 1000 && customers === 1) { //If the total cost is 1000 or more for a single customer then
      shipping = 0; //Set shipping to 0
    }
  }
  
  //Free shipping
  if (shipping === 0 && customers !== 1) {
    console.log(FREE_SHIPPING_WARNING);
  }
  
  if (location === 'NK') {
    console.log(BANNED_WARNING);
  } else {
    console.log('Price:', currency, totalCost + shipping);
  }