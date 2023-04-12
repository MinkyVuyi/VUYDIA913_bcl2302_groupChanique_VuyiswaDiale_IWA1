//wrote nickName is camel casing to avoid errors
const nickName = "Timmy"; 
const firstName = "Timothy";

//Used an if statement to obtain results
if (nickName || firstName) {
  console.log(`Good morning, ${nickName || firstName}!`);
} else {
  console.log("Good morning!");
}


