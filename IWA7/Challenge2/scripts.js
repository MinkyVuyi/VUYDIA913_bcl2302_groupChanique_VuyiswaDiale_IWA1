const nickName = "Timmy";
const firstName = "Timothy";


if (nickName || firstName) {
  console.log(`Good morning, ${nickName || firstName}!`);
} else {
  console.log("Good morning!");
}
