FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
hirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null



const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0;

let location = 'RSA';
let currency = 'R';
let customers = 1;
let shipping = null;

if (location === 'RSA') {
  shipping = 400;
  currency = 'R';
} else if (location === 'NAM') {
  shipping = 600;
} else {
  console.log(BANNED_WARNING);
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

if (shoes + batteries + pens + shirts > 1000) {
  if (location === 'NAM' && customers < 2) {
    if (location === 'RSA') {
      shipping = 0;
      // calcShipping() can be called here to calculate shipping costs
    }
  }
}

if (shipping === 0 && customers !== 1) {
  console.log(FREE_WARNING);
}

location = 'NK' ? console.log(BANNED_WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping);
