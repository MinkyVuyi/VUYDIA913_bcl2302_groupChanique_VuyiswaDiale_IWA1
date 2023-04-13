let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated === 'string' && !isNaN(calculated)
    const calculatedAsNumber = isString ? Number(calculated) : calculated
    calculated = calculatedAsNumber + 1
}

const calcUser = () => { //NB nothing was changed
    logCalc()
    if (calculated > 2) user = 'John'
    if (calculated > 2) state = 'requesting'
    if (calculated > 3) state = 'idle'
}

const checkUser = () => { //fixed the = operator to be after checkUser to assign checkUser
    if (user && state === 'requesting') { 
    console.log(`User: ${user} (${calculated})`)
    }
}


// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()


 /*
 This declares a constant variable logCalc and assigns an arrow function to it. 
*The arrow function takes no parameters and begins with an opening curly brace {, indicating the start of a function block.
*This adds 1 to the value of calculatedAsNumber and assigns the result back to the variable calculated.
*This line increments the value of calculated by 1.
*/ 