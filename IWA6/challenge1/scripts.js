const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof primaryPhone === 'string' && !isNaN(primaryPhone)
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone)

console.log('Primary phone is a valid numerical string:', primaryValid)
console.log('Secondary phone is a valid numerical string:', secondaryValid)
