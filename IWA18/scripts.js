/*import { createOrderHtml } from './view.js'
// Use the createOrderHtml function to create an order element
const order = {
  id: 1,
  title: 'Order 1',
  table: 4,
  created: '2023-04-18'
};

const orderElement = createOrderHtml(order);

// Append the order element to a container element in the DOM
const containerElement = document.getElementById('orders-container');
containerElement.appendChild(orderElement);

import { html } from './view.js'; // Update the path to the actual location of your file

// Use the html object
console.log(html.columns); // Access columns property
console.log(html.area); // Access area property
console.log(html.add.overlay); // Access overlay property in add object
console.log(html.edit.form); // Access form property in edit object
console.log(html.help.cancel); // Access cancel property in help object
console.log(html.other.grid); // Access grid property in other object

import { updateDraggingHtml } from './view.js'; // Update the path to the actual location of your file

// Call the updateDraggingHtml function
newDragging = {
    over: 'column1'
};
updateDraggingHtml(newDragging);

import { moveToColumn } from './view.js'; // Update the path to the actual location of your file

// Call the moveToColumn function
const id = '1234'; // Update with the actual id
const newColumn = 'column2'; // Update with the actual newColumn
moveToColumn(id, newColumn);

import { COLUMNS } from './view.js'; // Update the path to the actual location of your file

// Now you can use the COLUMNS constant in your code
console.log(COLUMNS); // ['ordered', 'preparing', 'served']

import { state } from './data.js'; // Update the path to the actual location of your file

// Now you can use the state object in your code
console.log(state); // { orders: {}, dragging: { source: null, over: null } }

import { createOrderData } from './data.js'; // Update the path to the actual location of your file

// Now you can use the createOrderData function in your code
const orderData = createOrderData({ title: 'Order 1', table: 'Table 1', column: 'ordered' });
console.log(orderData); // { title: 'Order 1', table: 'Table 1', column: 'ordered', id: 'uniqueId', created: 'currentDateAndTime' }

import { updateDragging } from './path/to/yourFile.js'; // Update the path to the actual location of your file

// Now you can use the updateDragging function in your code
const newDragging = { source: 'sourceId', over: 'overColumn' };
updateDragging(newDragging);


document.addEventListener('DOMContentLoaded', () => {
  const helpButton = document.querySelector('[data-help]');
  const helpOverlay = document.querySelector('[data-help-overlay]');
  const helpCloseButton = document.querySelector('[data-help-cancel]');

  // Show help overlay when help button is clicked
  helpButton.addEventListener('click', () => {
    helpOverlay.classList.add('overlay__visible');
  });

  // Hide help overlay when close button is clicked
  helpCloseButton.addEventListener('click', () => {
    helpOverlay.classList.remove('overlay__visible');
  });

  // Hide help overlay when backdrop is clicked
  document.addEventListener('click', (event) => {
    if (event.target === helpOverlay) {
      helpOverlay.classList.remove('overlay__visible');
    }
  });
});
*/
import { createOrderHtml } from './view.js'
// Use the createOrderHtml function to create an order element
const order = {
  id: 1,
  title: 'Order 1',
  table: 4,
  created: '2023-04-18'
};

const orderElement = createOrderHtml(order);

// Append the order element to a container element in the DOM
const containerElement = document.getElementById('orders-container');
containerElement.appendChild(orderElement);

import { html } from './view.js'; // Update the path to the actual location of your file

// Use the html object
console.log(html.columns); // Access columns property
console.log(html.area); // Access area property
console.log(html.add.overlay); // Access overlay property in add object
console.log(html.edit.form); // Access form property in edit object
console.log(html.help.cancel); // Access cancel property in help object
console.log(html.other.grid); // Access grid property in other object

import { updateDraggingHtml } from './view.js'; // Update the path to the actual location of your file

// Call the updateDraggingHtml function
newDragging = {
    over: 'column1'
};
updateDraggingHtml(newDragging);

import { moveToColumn } from './view.js'; // Update the path to the actual location of your file

// Call the moveToColumn function
const id = '1234'; // Update with the actual id
const newColumn = 'column2'; // Update with the actual newColumn
moveToColumn(id, newColumn);

import { COLUMNS } from './view.js'; // Update the path to the actual location of your file

// Now you can use the COLUMNS constant in your code
console.log(COLUMNS); // ['ordered', 'preparing', 'served']

import { state } from './data.js'; // Update the path to the actual location of your file

// Now you can use the state object in your code
console.log(state); // { orders: {}, dragging: { source: null, over: null } }

import { createOrderData } from './data.js'; // Update the path to the actual location of your file

// Now you can use the createOrderData function in your code
const orderData = createOrderData({ title: 'Order 1', table: 'Table 1', column: 'ordered' });
console.log(orderData); // { title: 'Order 1', table: 'Table 1', column: 'ordered', id: 'uniqueId', created: 'currentDateAndTime' }

import { updateDragging } from './path/to/yourFile.js'; // Update the path to the actual location of your file

// Now you can use the updateDragging function in your code
const newDragging = { source: 'sourceId', over: 'overColumn' };
updateDragging(newDragging);


document.addEventListener('DOMContentLoaded', () => {
  const helpButton = document.querySelector('[data-help]');
  const helpOverlay = document.querySelector('[data-help-overlay]');
  const helpCloseButton = document.querySelector('[data-help-cancel]');

  // Show help overlay when help button is clicked
  helpButton.addEventListener('click', () => {
    helpOverlay.classList.add('overlay__visible');
  });

  // Hide help overlay when close button is clicked
  helpCloseButton.addEventListener('click', () => {
    helpOverlay.classList.remove('overlay__visible');
  });

  // Hide help overlay when backdrop is clicked
  document.addEventListener('click', (event) => {
    if (event.target === helpOverlay) {
      helpOverlay.classList.remove('overlay__visible');
    }
  });
});

