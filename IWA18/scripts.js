// Get DOM elements
const addOrderBtn = document.getElementById('addOrderBtn');
const helpBtn = document.getElementById('helpBtn');
const closeBtn = document.getElementById('closeBtn');
const helpOverlay = document.getElementById('helpOverlay');
const addOrderOverlay = document.getElementById('addOrderOverlay');
const addOrderForm = document.getElementById('addOrderForm');
const cancelAddOrderBtn = document.getElementById('cancelAddOrderBtn');
const submitAddOrderBtn = document.getElementById('submitAddOrderBtn');
const ordersList = document.getElementById('ordersList');
const editOrderOverlay = document.getElementById('editOrderOverlay');
const cancelEditOrderBtn = document.getElementById('cancelEditOrderBtn');
const deleteOrderBtn = document.getElementById('deleteOrderBtn');
const updateOrderBtn = document.getElementById('updateOrderBtn');
const statusSelect = document.getElementById('statusSelect');
const columns = document.querySelectorAll('.column');

// Helper function to remove focus from all elements
const removeFocus = () => {
  addOrderBtn.blur();
  helpBtn.blur();
  closeBtn.blur();
  cancelAddOrderBtn.blur();
  submitAddOrderBtn.blur();
  cancelEditOrderBtn.blur();
  deleteOrderBtn.blur();
  updateOrderBtn.blur();
  statusSelect.blur();
  columns.forEach(column => column.blur());
};

// User Story 1: "Add Order" button should start as focused
addOrderBtn.focus();

// User Story 2: Clicking the "?" icon should open a "Help" overlay
helpBtn.addEventListener('click', () => {
  helpOverlay.classList.add('show');
  removeFocus();
});

// User Story 3: If "Help" overlay is open, clicking "Close" button should remove the overlay
closeBtn.addEventListener('click', () => {
  helpOverlay.classList.remove('show');
  addOrderBtn.focus();
});

// User Story 4: If any overlay is closed, focus should be returned to "Add Order" button
helpOverlay.addEventListener('transitionend', () => {
  if (!helpOverlay.classList.contains('show')) {
    addOrderBtn.focus();
  }
});

// User Story 5: Clicking "Add Order" should open an "Add Order" overlay
addOrderBtn.addEventListener('click', () => {
  addOrderOverlay.classList.add('show');
  removeFocus();
});

// User Story 6: Clicking "Cancel" in the "Add Order" overlay should remove the overlay without adding the information as an order
cancelAddOrderBtn.addEventListener('click', () => {
  addOrderForm.reset();
  addOrderOverlay.classList.remove('show');
  addOrderBtn.focus();
});

// User Story 7: Clicking the "Add" button in the "Add Order" overlay should remove the overlay and add a new order to the "Ordered" column
submitAddOrderBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const orderText = document.getElementById('orderText').value;
  const tableNumber = document.getElementById('tableNumber').value;
  if (orderText && tableNumber) {
    const order = { orderText, tableNumber, status: 'ordered' };
    addOrder(order);
    addOrderForm.reset();
    addOrderOverlay.classList.remove('show');
    addOrderBtn.focus();
  }
});

// User Story 8: If "Add Order" overlay is closed, it should be blank (not have information from the last time it was opened)
addOrderOverlay.addEventListener('transitionend', () => {
  if (!addOrderOverlay.classList.contains('show')) {
    addOrderForm.reset();
  }
});

// User Story 9: If an order has been added and it is clicked, the "Edit Order" overlay
// User Story 9: If an order has been added and it is clicked, the "Edit Order" overlay should appear
function handleOrderClick(orderId) {
  const order = getOrderById(orderId);
  const editOrderOverlay = document.getElementById("edit-order-overlay");
  const editOrderForm = document.getElementById("edit-order-form");
  const editOrderInput = document.getElementById("edit-order-input");
  const editTableInput = document.getElementById("edit-table-input");
  const editStatusInput = document.getElementById("edit-status-input");
  const editOrderDeleteBtn = document.getElementById("edit-order-delete-btn");
  const editOrderCancelBtn = document.getElementById("edit-order-cancel-btn");
  const editOrderUpdateBtn = document.getElementById("edit-order-update-btn");

  // Populate the edit order form with the order details
  editOrderInput.value = order.text;
  editTableInput.value = order.table;
  editStatusInput.value = order.status;

  // Show the edit order overlay
  editOrderOverlay.style.display = "block";

  // Set focus on the edit order input
  editOrderInput.focus();

  // Handle delete order button click
  editOrderDeleteBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Delete the order and close the edit order overlay
    deleteOrder(orderId);
    editOrderOverlay.style.display = "none";
    // Set focus back to the "Add Order" button
    document.getElementById("add-order-btn").focus();
  });

  // Handle cancel button click
  editOrderCancelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Close the edit order overlay
    editOrderOverlay.style.display = "none";
    // Set focus back to the "Add Order" button
    document.getElementById("add-order-btn").focus();
  });

  // Handle update button click
  editOrderUpdateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // Update the order with the new input values and close the edit order overlay
    updateOrder(orderId, editOrderInput.value, editTableInput.value, editStatusInput.value);
    editOrderOverlay.style.display = "none";
    // Set focus back to the "Add Order" button
    document.getElementById("add-order-btn").focus();
  });
}
