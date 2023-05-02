import { COLUMNS, state, updateDragging, createOrderData, TABLES } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
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
  const path = event.path || event.composedPath()
  let column = null

  for (const element of path) {
    const { area } = element.dataset
    if (area) {
      column = area
      break;
    }
  }

  if (!column) return
  updateDragging({ over: column })
  updateDraggingHtml({ over: column })
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener('dragover', handleDragOver)
}

import { COLUMNS, state, updateDragging, createOrderData, TABLES } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";

const handleDragStart = (event) => {
  const id = event.target.dataset.id
  const source = state.orders[id].column

  updateDragging({ source })

  event.dataTransfer.setData('text/plain', id)
  event.dataTransfer.dropEffect = 'move'
}

const handleDragOver = (event) => {
  event.preventDefault()

  const over = event.target.closest('.column').dataset.column

  updateDraggingHtml({ over })
}

const handleDrop = (event) => {
  event.preventDefault()

  const id = event.dataTransfer.getData('text/plain')
  const column = event.target.closest('.column').dataset.column

  moveToColumn(id, column)

  state.orders[id].column = column

  updateDraggingHtml()

  updateDragging({
    source: null,
    over: null,
  })
}

const init = () => {
  html.orders.forEach((order) => {
    order.addEventListener('dragstart', handleDragStart)
  })

  html.columns.forEach((column) => {
    column.addEventListener('dragover', handleDragOver)
    column.addEventListener('drop', handleDrop)
  })
}

init()

//Open Help Overlay

const handleHelpToggleOpen = () => {
  html.help.overlay.toggleAttribute('open');

  if (html.help.overlay.open) {
    // Hide the add order button and the table when the help overlay is open
    html.other.add.classList.add('hidden');
    html.add.table.classList.add('hidden');

    // Disable the drag and drop functionality when the help overlay is open
    for (const columnName of Object.keys(html.columns)) {
      const column = html.columns[columnName];
      column.removeAttribute('draggable');
      column.classList.remove('droppable');
    }
  } else {
    // Show the add order button and the table when the help overlay is closed
    html.other.add.classList.remove('hidden');
    html.add.table.classList.remove('hidden');

    // Enable the drag and drop functionality when the help overlay is closed
    for (const columnName of Object.keys(html.columns)) {
      COLUMNS = html.columns[columnName];
      COLUMNS.setAttribute('draggable', true);
      COLUMNS.classList.add('droppable');
    }
  }
};
html.other.help.addEventListener('click', handleHelpToggleOpen);

//Close Help Overlay

const handleHelpToggleClose = () => {
  html.help.overlay.toggleAttribute('open');

  if (!html.help.overlay.open) {
    html.help.overlay.close();
  }
};
html.help.cancel.addEventListener('click', handleHelpToggleClose);


// Add Order button Open

const handleAddToggle = () => {
  html.add.overlay.toggleAttribute('open');

  if (html.add.overlay.open) {
    const tableOptions = TABLES.map((table) => `
      <option value="${table}">${table}</option>
    `).join('');

    html.add.table.innerHTML = tableOptions;
  }
};
html.other.add.addEventListener('click', handleAddToggle);

//Add button to add order in the Ordered column

const handleAddSubmit = (event) => {
  event.preventDefault();

  // Get form input values
  const title = html.add.title.value;
  const table = html.add.table.value;

  // Create new order object and add to state
  const id = Object.keys(state.orders).length + 1;
  const created = new Date();
  const order = { id, title, table, created };
  state.orders[id] = order;

  // Create HTML element for new order and append to Ordered column
  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);

  // Reset form and hide add overlay
  html.add.form.reset();
  html.add.overlay.close();
};
html.add.form.addEventListener('submit', handleAddSubmit);

html.add.cancel.addEventListener('click', () => {
  html.add.form.reset();
  html.add.overlay.close();
});
html.add.overlay.addEventListener('close', () => {
  html.add.form.reset();
});

// Cancel Button to close the add order overlay
const handleAddCancel = (event) => {
  event.preventDefault();

  // Clear form
  html.add.form.reset();

  // Close overlay
  html.add.overlay.removeAttribute('open');
}
html.add.form.addEventListener('submit', handleAddSubmit);
html.add.cancel.addEventListener('click', handleAddCancel);

//Editing orders

const handleEditToggle = (event) => {
  const orderElem = event.target.closest('.order'); // Find the closest ancestor element with the "order" class

  if ('.order') {
    const orderId = orderElem.dataset.id; // Get the "id" of the clicked order
    html.edit.overlay.toggleAttribute('open');
    html.edit.id.value = orderId; // Set the "id" value in the edit form
    html.other.grid.reset();
    
  }
};

html.other.grid.addEventListener('click', handleEditToggle);


// Event listener for order click
html.other.grid.addEventListener('click', (event) => {
  const clickedOrder = event.target.closest('.order');

  // If a valid order was clicked
  if (clickedOrder) {
    // Get order information
    const orderName = clickedOrder.querySelector('.name').textContent;
    const tableNumber = clickedOrder.querySelector('.table').textContent;
    const status = clickedOrder.querySelector('.status').textContent;

    // Populate the overlay fields with order information
    html.edit.nameInput.value = orderName;
    html.edit.tableInput.value = tableNumber;
    html.edit.statusSelect.value = status;

    // Show the Edit Order overlay
    html.edit.overlay.setAttribute('open');
  }
});


//Update Edit Order 


//Cancel Button
const handleEditToggleCancel = () => {
  html.edit.overlay.close();
};
html.edit.cancel.addEventListener('click', handleEditToggleCancel);

//Delete Button
const handleEditDelete = () => {
  const orderId = html.edit.form.dataset.orderId;
  deleteOrderById(orderId);
  html.edit.overlay.close();
};
html.edit.deleteButton.addEventListener('click', handleEditDelete);
