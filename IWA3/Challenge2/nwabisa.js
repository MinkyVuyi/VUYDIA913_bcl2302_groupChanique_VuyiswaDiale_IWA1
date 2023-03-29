// nwabisa.js

export { role as nwabisa } from "\nwabisa.js"

const firstName = "Nwabisa";
const surname = "Gabe";
const role = "CEO";

const display = ${firstname} ${surname} (${role});
document.querySelector('#nwabisa').innerText = display;