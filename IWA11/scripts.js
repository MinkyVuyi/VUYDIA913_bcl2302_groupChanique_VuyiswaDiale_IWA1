// Retrieve the DOM elements for Order 1
const order1Root = document.querySelector('[data-key="order1"]');
const order1Biscuits = order1Root.querySelector('.biscuits .count'); // Retrieve the DOM element for biscuits count in Order 1
const order1Donuts = order1Root.querySelector('.donuts .count'); // Retrieve the DOM element for donuts count in Order 1
const order1Pancakes = order1Root.querySelector('.pancakes .count'); // Retrieve the DOM element for pancakes count in Order 1
const order1Status = order1Root.querySelector('.status dd'); // Retrieve the DOM element for status in Order 1

// Retrieve the DOM elements for Order 2
const order2Root = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2Root.querySelector('.biscuits .count'); // Retrieve the DOM element for biscuits count in Order 2
const order2Donuts = order2Root.querySelector('.donuts .count'); // Retrieve the DOM element for donuts count in Order 2
const order2Pancakes = order2Root.querySelector('.pancakes .count'); // Retrieve the DOM element for pancakes count in Order 2
const order2Status = order2Root.querySelector('.status dd'); // Retrieve the DOM element for status in Order 2

// Retrieve the DOM elements for Order 3
const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3Root.querySelector('.biscuits .count'); // Retrieve the DOM element for biscuits count in Order 3
const order3Donuts = order3Root.querySelector('.donuts .count'); // Retrieve the DOM element for donuts count in Order 3
const order3Pancakes = order3Root.querySelector('.pancakes .count'); // Retrieve the DOM element for pancakes count in Order 3
const order3Status = order3Root.querySelector('.status dd'); // Retrieve the DOM element for status in Order 3

// Update the innerHTML of the DOM elements with actual values from data attributes
order1Biscuits.innerHTML = order1Root.getAttribute('data-biscuits'); // Set the biscuits count in Order 1
order1Donuts.innerHTML = order1Root.getAttribute('data-donuts'); // Set the donuts count in Order 1
order1Pancakes.innerHTML = order1Root.getAttribute('data-pancakes'); // Set the pancakes count in Order 1
order1Status.innerHTML = order1Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'; // Set the status in Order 1

order2Biscuits.innerHTML = order2Root.getAttribute('data-biscuits'); // Set the biscuits count in Order 2
order2Donuts.innerHTML = order2Root.getAttribute('data-donuts'); // Set the donuts count in Order 2
order2Pancakes.innerHTML = order2Root.getAttribute('data-pancakes'); // Set the pancakes count in Order 2
order2Status.innerHTML = order2Root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending'; // Set the status in Order 2

order3Biscuits.innerHTML = order3Root.getAttribute('data-biscuits'); // Set the biscuits count in Order 3
order3Donuts.innerHTML = order3Root.getAttribute('data-donuts'); // Set the donuts count in Order 3
order3Pancakes.innerHTML = order3Root.getAttribute('data-pancakes'); // Set the pancakes count in Order 3
order3Status.innerHTML = order3Root.getAttribute('data-delivered') === '