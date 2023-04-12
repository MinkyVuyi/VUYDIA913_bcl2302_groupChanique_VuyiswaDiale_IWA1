const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// Example of updating button properties for book with status 'overdue'
const status2 = document.getElementById('status2');
const reserve2 = document.getElementById('reserve2');
const checkout2 = document.getElementById('checkout2');
const checkIn2 = document.getElementById('checkIn2');


document.addEventListener('DOMContentLoaded', function () {
    status2.style.color = STATUS_MAP.overdue.color;
    reserve2.disabled = !STATUS_MAP.overdue.canReserve;
    checkout2.disabled = !STATUS_MAP.overdue.canCheckout;
    checkIn2.disabled = !STATUS_MAP.overdue.canCheckIn;
});
function updateButtonProperties(status, statusMap) {
  const statusElement = document.getElementById(`status${status}`);
  const reserveElement = document.getElementById(`reserve${status}`);
  const checkoutElement = document.getElementById(`checkout${status}`);
  const checkInElement = document.getElementById(`checkIn${status}`);

  document.addEventListener('DOMContentLoaded', function () {
    statusElement.style.color = statusMap.color;
    reserveElement.disabled = !statusMap.canReserve;
    checkoutElement.disabled = !statusMap.canCheckout;
    checkInElement.disabled = !statusMap.canCheckIn;
  });
}

// Call the function for each status
updateButtonProperties(0, STATUS_MAP.shelf);
updateButtonProperties(1, STATUS_MAP.reserved);
updateButtonProperties(2, STATUS_MAP.overdue);
