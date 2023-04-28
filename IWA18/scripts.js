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

let draggedOrder = null;

const handleDragStart = (event) => {
  event.preventDefault();
  draggedOrder = event.target;
};

const handleDragEnter = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('column')) {
    event.target.classList.add('highlight');
  }
};

const handleDragLeave = (event) => {
  event.preventDefault();
  if (event.target.classList.contains('column')) {
    event.target.classList.remove('highlight');
  }
};

const handleDrop = (event) => {
  event.preventDefault();
  const targetColumn = event.target.closest('.column');
  if (targetColumn && targetColumn !== draggedOrder.parentElement) {
    targetColumn.appendChild(draggedOrder);
  }
};

const handleDragEnd = (event) => {
  event.preventDefault();
  for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.classList.remove('highlight');
  }
  draggedOrder = null;
};

// Add event listeners for drag-and-drop events on all columns
for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener('dragstart', handleDragStart);
  htmlColumn.addEventListener('dragenter', handleDragEnter);
  htmlColumn.addEventListener('dragleave', handleDragLeave);
  htmlColumn.addEventListener('drop', handleDrop);
  htmlColumn.addEventListener('dragend', handleDragEnd);
}


  /*const handleDragEnd = (event) => {
    event.preventDefault();
    // Remove highlight class from all columns
    for (const htmlColumn of Object.values(html.columns)) {
      htmlColumn.classList.remove('highlight');
    }
  };
  
  // Add event listener for dragend on all columns
  for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragend', handleDragEnd );
  }
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

const handleHelpToggle1 = () => {
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

//Submit Changes
const handleEditSubmit = (event) => {
  event.preventDefault();
html.edit.form.orderHtml = createOrderData('active');

  const formData = new FormData(event.target);
  const id = formData.get('id');
  const column = formData.get('column');

  // Update the order's status in the orders array
  const order = state.orders.find(order => order.id === id);
  order.status = column;

  // Remove the order from the current column's HTML area and append it to the new column's area
  const currentColumn = html.columns[order.status];
  const newColumn = html.columns[COLUMNS];
  const orderHtml = currentColumn.querySelector(`[data-order-id="${id}"]`);
  orderHtml.remove();
  newColumn.querySelector('[data-area]').appendChild(orderHtml);

  // Hide the edit overlay
  html.edit.overlay.close();
};

// add an event listener to the "submit" button in the "Edit Order" form
html.edit.form.addEventListener('submit', handleEditSubmit);

//Cancel Button
const handleEditToggleCancel = () => {
  html.edit.overlay.close();
};
html.edit.cancel.addEventListener('click', handleEditToggleCancel);
