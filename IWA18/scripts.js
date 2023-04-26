import {COLUMNS, state, createOrderData, updateDragging} from "./data.js";
import {createOrderHtml, html, updateDraggingHtml, moveToColumn} from "./view.js"
/*
Maps over all columns in the HTML and removes any dragging hover effects except for the current column that is being dragged over (if at all). 
If the "over" value is not specified, then all columns will be cleared of any hover effects.

@param newDragging
*
*/

// Select the "Add Order" button
const addOrderBtn = document.querySelector('[data-add]');

// Add a click event listener to the "Add Order" button
addOrderBtn.addEventListener('click', () => {
  // Show the "Add Order" dialog
  const addOverlay = document.querySelector('[data-add-overlay]');
  addOverlay.showModal();

  // Populate the table select element with options
  const tableSelect = document.querySelector('[data-add-table]');
  tableSelect.innerHTML = html `${state.tables.map(table =>
    `<option value="${table.id}">Table ${table.number}</option>`
  ).join('')} `;
});

// Add a submit event listener to the "Add Order" form
const addForm = document.querySelector('[data-add-form]');
addForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(addForm);
  const title = formData.get('title');
  const tableId = formData.get('table');

  // Create a new order object and add it to the "ordered" column
  const order = createOrderData({ title, table: tableId, column: COLUMNS.ORDERED });
  state.orders[order.id] = order;
  state.columns[COLUMNS.ORDERED].orderIds.push(order.id);

  // Render the new order in the "ordered" column
  const orderedColumn = document.querySelector('[data-column="ordered"]');
  const orderElement = createOrderHtml(order);
  orderedColumn.appendChild(orderElement);

  // Close the "Add Order" dialog
  addForm.reset();
  const addOverlay = document.querySelector('[data-add-overlay]');
  addOverlay.close();
});

// Get a reference to the "?" icon element
const helpIcon = document.getElementById('data-help');

// Get a reference to the "Help" overlay element
const helpOverlay = document.getElementById('help-overlay');

// Add an event listener to the "?" icon element for the "click" event
helpIcon.addEventListener('click', () => {
  // Display the "Help" overlay
  helpOverlay.style.display = 'block';
});

helpOverlay = document.querySelector('#help-overlay');
const helpCloseButton = document.querySelector('#help-close-button');

helpCloseButton.addEventListener('click', function() {
  helpOverlay.classList.remove('active');
});

helpOverlay = document.querySelector('#help-overlay');
addOrderBtn = document.querySelector('#add-order-button');

helpOverlay.addEventListener('transitionend', function(event) {
  if (event.propertyName === 'opacity' && !this.classList.contains('active')) {
    addOrderBtn.focus();
  }
});

// Update dragging state when dragstart event is triggered
document.addEventListener('dragstart', (event) => {
  const sourceId = event.target.id;
  const overColumn = event.target.closest('.column').id;
  const newDraggingState = { source: sourceId, over: overColumn };
  updateDragging(newDraggingState);
});

// Update dragging state when dragover event is triggered
document.addEventListener('dragover', (event) => {
  event.preventDefault();
  const overColumn = event.target.closest('.column').id;
  const draggingState = { ...state.dragging, over: overColumn };
  updateDragging(draggingState);
});

// Update column when drop event is triggered
document.addEventListener('drop', (event) => {
  event.preventDefault();
  const sourceId = event.dataTransfer.getData('text/plain');
  const overColumn = event.target.closest('.column').id;
  moveToColumn(sourceId, overColumn);
});


// Call the updateDraggingHtml function
const newDragging = {
  over: 'column1'
};
updateDraggingHtml(newDragging);

// Create an order element using createOrderHtml function
const order = {
  id: 1,
  title: 'Order 1',
  table: 4,
  created: '2023-04-18'
};

orderElement = createOrderHtml(order);

// Append the order element to a container element in the DOM
const containerElement = document.getElementById('orders-container');
containerElement.appendChild(orderElement);

// Update the state and move the order to the new column
state.columns[oldColumn].orderIds = state.columns[oldColumn].orderIds.filter(orderId => orderId !== id);
state.columns[newColumn].orderIds.push(id);

// Update the order element in the DOM
const orderElement = document.getElementById(id);
const newColumnElement = document.querySelector(`#${newColumn} .column__content`);
newColumnElement.appendChild(orderElement); 



// Select the "Help" button
const helpBtn = document.querySelector('[data-help]');
const closeBtn = document.querySelector('[data-help-cancel]')
const addOrderButton = document.querySelector('.button')

// Add a click event listener to the "Help" button
helpBtn.addEventListener('click', () => {
  // Show the "Help" overlay
  const helpOverlay = document.querySelector('[data-help-overlay]');
  helpOverlay.showModal();

  closeBtn.addEventListener('click', () => {
    helpOverlay.close()
    addOrderButton.focus()

  })
});