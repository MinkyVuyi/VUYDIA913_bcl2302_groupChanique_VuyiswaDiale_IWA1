// johannes.js

export const role = "Intern";

const firstname = "Johannes";
const surname = "Potgieter";
const display = `${firstname} ${surname} (${role})`;

document.querySelector('#johannes').innerText = display;