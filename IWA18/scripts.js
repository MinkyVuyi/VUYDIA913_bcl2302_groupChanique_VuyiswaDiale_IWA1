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
  htmlArea.addEventListener('dragover', handleDragOver);
}
/*
const handleDragStart = () => {

}
htmlColumn.addEventListener('dragstart', handleDragStart);


const handleDragEnd = () => {

}
htmlColumn.addEventListener('dragend', handleDragEnd);
*/

//Open Help Overlay

const handleHelpToggle = () => {
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
html.other.help.addEventListener('click', handleHelpToggle);

//Close Help Overlay

const handleHelpToggle1 = (_event) => {
  html.help.overlay.toggleAttribute('open');

  if (!html.help.overlay.open) {
    html.help.overlay.close();
  }
};
html.help.cancel.addEventListener('click', handleHelpToggle1);


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


//Edit Order overlay Open
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute('open');
};
html.other.grid.addEventListener('click', handleEditToggle);

/*
//Submit Changes
const handleEditOrder = (event) => {
  event.preventDefault();

  const form = event.target;
  const orderId = form.querySelector('[data-edit-id]').value;
  const title = form.querySelector('[data-edit-title]').value;
  const table = form.querySelector('[data-edit-table]').value;
  const column = form.querySelector('[data-edit-column]').value;

  const order = state.orders.find((order) => order.id === orderId);
  order.title = title;
  order.table = table;
  order.column = column;

  const orderElement = document.querySelector(`[data-id="${orderId}"]`);
  orderElement.querySelector('[data-order-title]').textContent = title;
  orderElement.querySelector('[data-order-table]').textContent = table;

  form.reset();
  event.target.closest('[data-edit-overlay]').close();
}

document.addEventListener('submit', (event) => {
  if (event.target.matches('[data-edit-form]')) {
    handleEditOrder(event);
  };
});


//Delete button
const handleDelete = () => {
  html.edit.overlay.close(); // close the Edit Order overlay

}
html.edit.delete.addEventListener('click', handleDelete);
*/
//Cancel Button
const handleEditToggleCancel = () => {
  html.edit.overlay.close();
};
html.edit.cancel.addEventListener('click', handleEditToggleCancel);
