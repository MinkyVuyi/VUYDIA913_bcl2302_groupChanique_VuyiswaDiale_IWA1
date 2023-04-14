const firstName = 'John'; //added const to these variables
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => { //added parameter in the empty brackets
  console.log(parameter); //console was not correctly written which I fixed
  console.log(parameter);
}

const hobbyFunction = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}
/*
*replaced name with firstName
*had const function hobby to be hobbyFunction
*/
hobbyFunction();
