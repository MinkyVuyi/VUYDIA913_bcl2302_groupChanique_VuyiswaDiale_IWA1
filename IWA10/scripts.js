const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`16 December ${currentYear}`),
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`),
    },
};

const christmas = 6;
const futureId = 9;

// Check if futureId holiday exists, if not log a message
if (!holidays[futureId]) {
    console.log(`ID ${futureId} not created yet`);
}

// Create a copy of the Christmas holiday and update its name and date
const copied = { ...holidays[christmas] };
copied.name = 'X-mas';
copied.date.setHours(0, 0, 0, 0);

// Check if the new date is earlier than the current date
const isEarlier = copied.date < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

// If the new date is earlier, update the copied object
if (isEarlier) {
    holidays[christmas] = copied;
}

// Log the changes made to the copied object
console.log('ID change:', copied.id !== holidays[christmas].id);
console.log('Name change:', copied.name);
console.log('Date change:', copied.date.toLocaleDateString('en-GB'));

// Get the first holiday and last holiday of the year
const keys = Object.keys(holidays).map(Number);
const firstHoliday = new Date(Math.min(...keys.map(key => holidays[key].date.getTime())));
const lastHoliday = new Date(Math.max(...keys.map(key => holidays[key].date.getTime())));

// Format the first holiday and last holiday dates as DD/MM/YYYY
const formattedFirstHoliday = `${firstHoliday.getDate().toString().padStart(2, '0')}/${(firstHoliday.getMonth() + 1).toString().padStart(2, '0')}/${firstHoliday.getFullYear()}`;
const formattedLastHoliday = `${lastHoliday.getDate().toString().padStart(2, '0')}/${(lastHoliday.getMonth() + 1).toString().padStart(2, '0')}/${lastHoliday.getFullYear()}`;

// Log the first holiday and last holiday dates
console.log('First holiday in the year:', formattedFirstHoliday);
console
