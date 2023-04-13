// Select the DOM elements for order1 and its child elements
const order1 = document.querySelector('[data-key="order1"]');
const order1Biscuits = order1.querySelector('.biscuits .count');
const order1Donuts = order1.querySelector('.donuts .count');
const order1Pancakes = order1.querySelector('.pancakes .count');
const order1Status = order1.querySelector('.status');

// Set the text content of order1's child elements based on their respective data attributes
order1Biscuits.textContent = order1.dataset.biscuits;
order1Donuts.textContent = order1.dataset.donuts;
order1Pancakes.textContent = order1.dataset.pancakes;
order1Status.textContent = order1.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// Select the DOM elements for order2 and its child elements
const order2 = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2.querySelector('.biscuits .count');
const order2Donuts = order2.querySelector('.donuts .count');
const order2Pancakes = order2.querySelector('.pancakes .count');
const order2Status = order2.querySelector('.status');

// Set the text content of order2's child elements based on their respective data attributes
order2Biscuits.textContent = order2.dataset.biscuits;
order2Donuts.textContent = order2.dataset.donuts;
order2Pancakes.textContent = order2.dataset.pancakes;
order2Status.textContent = order2.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// Select all DOM elements with data-biscuits attribute
const biscuitCounts = document.querySelectorAll('[data-biscuits]');
let totalBiscuitsDelivered = 0;
let totalBiscuitsOutstanding = 0;

// Loop through each biscuitCount element and calculate total biscuits delivered and outstanding
biscuitCounts.forEach(function (biscuits) {
    if (biscuits.dataset.delivered === 'true') {
        totalBiscuitsDelivered += parseInt(biscuits.dataset.biscuits);
    } else {
        totalBiscuitsOutstanding += parseInt(biscuits.dataset.biscuits);
    }
});

// Select all DOM elements with data-donuts attribute
const donutsCounts = document.querySelectorAll('[data-donuts]');
let totalDonutsDelivered = 0;
let totalDonutsOutstanding = 0;

// Loop through each donutsCount element and calculate total donuts delivered and outstanding
donutsCounts.forEach(function (donuts) {
    if (donuts.dataset.delivered === 'true') {
        totalDonutsDelivered += parseInt(donuts.dataset.donuts);
    } else {
        totalDonutsOutstanding += parseInt(donuts.dataset.donuts);
    }
});

/// Select all DOM elements with data-panCakes attribute
const panCakesCounts = document.querySelectorAll('[data-panCakes]');
let totalPanCakesDelivered = 0;
let totalPanCakesOutstanding = 0;

// Loop through each panCakesCount element and calculate total panCakes delivered and outstanding
panCakesCounts.forEach(function (panCakes) {
    const panCakesCount = parseInt(panCakes.dataset.panCakes);
    if (!isNaN(panCakesCount)) {
        if (panCakes.dataset.delivered === 'true') {
            totalPanCakesDelivered += panCakesCount;
        } else {
            totalPanCakesOutstanding += panCakesCount;
        }
    }
});

// Log the total counts of delivered and outstanding biscuits, donuts, and pancakes
console.log(`Total biscuits delivered: ${totalBiscuitsDelivered}`);
console.log(`Total biscuits outstanding: ${totalBiscuitsOutstanding}`);
console.log(`Total donuts delivered: ${totalDonutsDelivered}`);
console.log(`Total donuts outstanding: ${totalDonutsOutstanding}`);
console.log(`Total pancakes delivered: ${totalPanCakesDelivered}`);
console.log(`Total pancakes outstanding: ${totalPanCakesOutstanding}`);