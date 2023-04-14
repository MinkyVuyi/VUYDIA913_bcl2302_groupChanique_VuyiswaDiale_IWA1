/*// Import data.js and view.js file exports
import { orders, columns } from './data.js';
import { updateOrdersView, clearAddOrderForm } from './view.js';

// Get DOM elements
const addButton = document.querySelector('[data-add]');
const helpOverlay = document.querySelector('[data-help-overlay]');
const helpCancelButton = document.querySelector('[data-help-cancel]');
const addOverlay = document.querySelector('[data-add-overlay]');
const addForm = document.querySelector('[data-add-form]');
const addTitleInput = document.querySelector('[data-add-title]');
const addTableInput = document.querySelector('[data-add-table]');
const editOverlay = document.querySelector('[data-edit-overlay]');
const editForm = document.querySelector('[data-edit-form]');
const editTitleInput = document.querySelector('[data-edit-title]');
const editTableInput = document.querySelector('[data-edit-table]');
const editStatusSelect = document.querySelector('[data-edit-status]');
const editDeleteButton = document.querySelector('[data-edit-delete]');
const editCancelButton = document.querySelector('[data-edit-cancel]');
const editUpdateButton = document.querySelector('[data-edit-update]');

// Add event listeners
addButton.addEventListener('click', () => {
  addOverlay.showModal();
});

helpCancelButton.addEventListener('click', () => {
  helpOverlay.close();
  addButton.focus();
});

addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = addTitleInput.value;
  const table = addTableInput.value;
  orders.push({ id: Date.now(), title, table, status: 'ordered' });
  updateOrdersView();
  addOverlay.close();
  clearAddOrderForm();
});

addOverlay.addEventListener('close', () => {
  clearAddOrderForm();
});

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const orderId = parseInt(editForm.dataset.orderId);
  const title = editTitleInput.value;
  const table = editTableInput.value;
  const status = editStatusSelect.value;
  const orderIndex = orders.findIndex(order => order.id === orderId);
  orders[orderIndex] = { id: orderId, title, table, status };
  updateOrdersView();
  editOverlay.close();
});

editDeleteButton.addEventListener('click', () => {
  const orderId = parseInt(editForm.dataset.orderId);
  const orderIndex = orders.findIndex(order => order.id === orderId);
  orders.splice(orderIndex, 1);
  updateOrdersView();
  editOverlay.close();
});

editCancelButton.addEventListener('click', () => {
  editOverlay.close();
});

editUpdateButton.addEventListener('click', () => {
  const orderId = parseInt(editForm.dataset.orderId);
  const title = editTitleInput.value;
  const table = editTableInput.value;
  const status = editStatusSelect.value;
  const orderIndex = orders.findIndex(order => order.id === orderId);
  orders[orderIndex] = { id: orderId, title, table, status };
  const columnId = columns.findIndex(column => column.orders.includes(orderId));
  const column = columns[columnId];
  const orderIndexInColumn = column.orders.findIndex(orderId);
  column.orders.splice(orderIndexInColumn, 1);
  columns[status].orders.push(orderId);
  updateOrdersView();
  editOverlay.close();
});

// Add logic for remaining event handlers
*/
// Create a DOM instance
const dom = new JSDOM('<html><body></body></html>');
const window = dom.window;
const document = window.document;

const addOrderButton = document.getElementById('add-order');
addOrderButton.focus();
const helpIcon = document.getElementById('help-icon');
helpIcon.addEventListener('click', () => {
  view.openHelpOverlay();
});

const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    view.closeOverlay();
    addOrderButton.focus();
  });
});

const cancelButtons = document.querySelectorAll('.cancel-button');
cancelButtons.forEach(button => {
  button.addEventListener('click', () => {
    view.closeOverlay();
    addOrderButton.focus();
  });
});

const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const orderText = view.getOrderText();
    const tableNumber = view.getTableNumber();
    // Call function to add order to "Ordered" column
    // with orderText and tableNumber as arguments
    // ...
    view.closeOverlay();
    addOrderButton.focus();
  });
});

const updateButtons = document.querySelectorAll('.update-button');
updateButtons.forEach(button => {
  button.addEventListener('click', () => {
    const orderId = view.getOrderId();
    const orderText = view.getEditOrderText();
    const tableNumber = view.getEditTableNumber();
    const status = view.getEditStatus();
    // Call function to update order with orderId, orderText, tableNumber, and status
    // ...
    view.closeOverlay();
  });
});

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const orderId = view.getOrderId();
    // Call function to remove order with orderId
    // ...
    view.closeOverlay();
  });
});

const editCancelButtons = document.querySelectorAll('.edit-cancel-button');
editCancelButtons.forEach(button => {
  button.addEventListener('click', () => {
    view.closeOverlay();
  });
});

const statusDropdowns = document.querySelectorAll('.status-dropdown');
statusDropdowns.forEach(dropdown => {
  dropdown.addEventListener('change', () => {
    const orderId = view.getOrderId();
    const status = view.getEditStatus();
    // Call function to update status of order with orderId and status
    // ...
  });
});
``
