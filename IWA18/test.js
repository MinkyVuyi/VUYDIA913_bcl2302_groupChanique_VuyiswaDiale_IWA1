// import { COLUMNS, state, updateDragging, createOrderData, TABLES } from "./data.js";
// import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
// /**
//  * A handler that fires when a user drags over any element inside a column. In
//  * order to determine which column the user is dragging over the entire event
//  * bubble path is checked with `event.path` (or `event.composedPath()` for
//  * browsers that don't support `event.path`). The bubbling path is looped over
//  * until an element with a `data-area` attribute is found. Once found both the
//  * active dragging column is set in the `state` object in "data.js" and the HTML
//  * is updated to reflect the new column.
//  *
//  * @param {Event} event 
//  */
// const handleDragOver = (event) => {
//     event.preventDefault();
//     const path = event.path || event.composedPath()
//     let column = null

//     for (const element of path) {
//         const { area } = element.dataset
//         if (area) {
//             column = area
//             break;
//         }
//     }

//     if (!column) return
//     updateDragging({ over: column })
//     updateDraggingHtml({ over: column })
// }


// const handleDragStart = (event) => {}
// const handleDragEnd = (event) => {}

// //Open Help Overlay

// const handleHelpToggleOpen = () => {
//   html.help.overlay.toggleAttribute('open');

//   if (html.help.overlay.open) {
//     // Hide the add order button and the table when the help overlay is open
//     html.other.add.classList.add('hidden');
//     html.add.table.classList.add('hidden');

//     // Disable the drag and drop functionality when the help overlay is open
//     for (const columnName of Object.keys(html.columns)) {
//       const column = html.columns[columnName];
//       column.removeAttribute('draggable');
//       column.classList.remove('droppable');
//     }
//   } else {
//     // Show the add order button and the table when the help overlay is closed
//     html.other.add.classList.remove('hidden');
//     html.add.table.classList.remove('hidden');

//     // Enable the drag and drop functionality when the help overlay is closed
//     for (const columnName of Object.keys(html.columns)) {
//       COLUMNS = html.columns[columnName];
//       COLUMNS.setAttribute('draggable', true);
//       COLUMNS.classList.add('droppable');
//     }
//   }
// };
// html.other.help.addEventListener('click', handleHelpToggleOpen);

// //Close Help Overlay

// const handleHelpToggleClose = () => {
//   html.help.overlay.toggleAttribute('open');

//   if (!html.help.overlay.open) {
//     html.help.overlay.close();
//   }
// };
// html.help.cancel.addEventListener('click', handleHelpToggleClose);


// // Add Order button Open

// const handleAddToggle = () => {
//   html.add.overlay.toggleAttribute('open');

//   if (html.add.overlay.open) {
//     const tableOptions = TABLES.map((table) => `
//       <option value="${table}">${table}</option>
//     `).join('');

//     html.add.table.innerHTML = tableOptions;
//   }
// };
// html.other.add.addEventListener('click', handleAddToggle);

// //Add button to add order in the Ordered column

// const handleAddSubmit = (event) => {
//   event.preventDefault();

//   // Get form input values
//   const title = html.add.title.value;
//   const table = html.add.table.value;

//   // Create new order object and add to state
//   const id = Object.keys(state.orders).length + 1;
//   const created = new Date();
//   const order = { id, title, table, created };
//   state.orders[id] = order;

//   // Create HTML element for new order and append to Ordered column
//   const orderElement = createOrderHtml(order);
//   html.area.ordered.append(orderElement);

//   // Reset form and hide add overlay
//   html.add.form.reset();
//   html.add.overlay.close();
// };
// html.add.form.addEventListener('submit', handleAddSubmit);

// html.add.cancel.addEventListener('click', () => {
//   html.add.form.reset();
//   html.add.overlay.close();
// });
// html.add.overlay.addEventListener('close', () => {
//   html.add.form.reset();
// });

// // Cancel Button to close the add order overlay
// const handleAddCancel = (event) => {
//   event.preventDefault();

//   // Clear form
//   html.add.form.reset();

//   // Close overlay
//   html.add.overlay.removeAttribute('open');
// }
// html.add.form.addEventListener('submit', handleAddSubmit);
// html.add.cancel.addEventListener('click', handleAddCancel);

// //Editing orders

// //Edit Order overlay Open
// const handleEditToggle = () => {
//   html.edit.overlay.toggleAttribute('open');
// };
// html.other.grid.addEventListener('click', handleEditToggle);

// // Event listener for order click
// html.other.grid.addEventListener('click', (event) => {
//   const clickedOrder = event.target.closest('.order');

//   // If a valid order was clicked
//   if (clickedOrder) {
//     // Get order information
//     const orderName = clickedOrder.querySelector('.name').textContent;
//     const tableNumber = clickedOrder.querySelector('.table').textContent;
//     const status = clickedOrder.querySelector('.status').textContent;

//     // Populate the overlay fields with order information
//     html.edit.nameInput.value = orderName;
//     html.edit.tableInput.value = tableNumber;
//     html.edit.statusSelect.value = status;

//     // Show the Edit Order overlay
//     html.edit.overlay.setAttribute('open');
//   }
// });

// const dataOrder = document.querySelector('[data-column="ordered"]')
// const handleEditToggle1 = (event) => {
//     event.preventDefault();
//     const dataTitle1 = document.querySelector('[data-order-title]');
//     const editTitle1 = dataTitle1.innerText;
//     html.edit.title.value = editTitle1;
//     const dataTable1 = document.querySelector('[data-order-table]');
//     const editTable1 = dataTable1.innerText;
//     html.edit.table.value = editTable1;
//     html.edit.overlay.style.display = "block";
// };
// dataOrder.addEventListener('click', handleEditToggle1);

// //Update Edit Order 
// //------------------SUBMITTING EDITED DATA ORDER ----------------------------//

// //const update = document.querySelector('[form="edit-form"]')
// const handleEditSubmit = (event) => {
//     event.preventDefault();
//     const dataTitle1 = document.querySelector('[data-order-title]')
//     dataTitle1.textContent = html.edit.title.value;
//     const dataTable1 = document.querySelector('[data-order-table]');
//     dataTable1.textContent = html.edit.table.value;
//     // Hide the edit form
//     html.edit.overlay.style.display = "none";
// };
// html.edit.form.addEventListener('submit', handleEditSubmit);

// //Cancel Button
// const handleEditToggleCancel = () => {
//   html.edit.overlay.close();
// };
// html.edit.cancel.addEventListener('click', handleEditToggleCancel);

// //Delete Button
// const handleDelete = (event) => {
//     event.preventDefault()
//     const dataOrder = document.querySelector('[data-column="ordered"]')
//     dataOrder.remove()
//     html.edit.overlay.style.display = "none";
// }
// html.edit.delete.addEventListener('click', handleDelete)

import { COLUMNS,state,updateDragging,createOrderData,TABLES} from "./data.js";
import {createOrderHtml,html, updateDraggingHtml,moveToColumn} from "./view.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }
  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
  htmlArea.addEventListener("dragover", handleDragOver);
};
const handleDragStart = () => {
  htmlColumn.addEventListener("dragstart", handleDragStart);
};
const handleDragEnd = () => {
  htmlColumn.addEventListener("dragend", handleDragEnd);
};
//----Opens Help screen -----
const handleHelpToggle = () => {
  html.help.overlay.toggleAttribute("open");
};
html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);
//------Opens Add order menu------
const handleAddToggle = () => {
  html.add.overlay.toggleAttribute("open");
};
html.other.add.addEventListener("click", handleAddToggle);
html.add.cancel.addEventListener("click", handleAddToggle);
//---Submit information ----
const handleAddSubmit = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action
  const order = {
    id: state.orders,
    title: html.add.title.value,
    table: html.add.table.value,
    created: new Date(),
  };
  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);
  html.add.form.reset();
  html.add.overlay.close();
};
html.add.form.addEventListener("submit", handleAddSubmit);
//----- Opens edit menu -----
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute("open");
};
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
//----- Submit edited information -----
const handleEditSubmit = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action
  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };
  const order = { id, title, table, created, column };
  // Find the index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found
  // Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }
  // Update the order data in the state object
  state.orders[orderId] = createOrderData(order);
  // Update the order element with the new data
  const newOrder = createOrderHtml(order);
  const oldOrder= document.querySelector(`[data-id="${id}"]`);
  oldOrder.replaceWith(newOrder);
  // Move the order element to the correct column in the HTML
  switch (column) {
    case "ordered":
      html.area.ordered.append(newOrder);
      break;
    case "preparing":
      html.area.preparing.append(newOrder);
      break;
    case "served":
      html.area.served.append(newOrder);
      break;
    default:
      break;
  }
  html.edit.overlay.close();
};
html.edit.form.addEventListener("submit", handleEditSubmit);
const handleDelete = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action
  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };
  const order = { id, title, table, created, column };
  // Find the index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found
  // Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }
  // Delete the order element with the new data
  const newOrder = createOrderHtml(order);
  const oldOrder= document.querySelector(`[data-id="${id}"]`);
  oldOrder.remove(newOrder);
  html.edit.overlay.close();
};
html.edit.delete.addEventListener("click", handleDelete);
