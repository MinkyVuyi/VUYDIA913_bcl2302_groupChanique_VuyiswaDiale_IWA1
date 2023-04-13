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

// Do not change code above this comment

if (futureId in holidays) { /*used if statement to check if a variable futureId exists in an holidays array or object*/
    console.log(holidays[futureId].name);
  } else {
    console.log(`ID ${futureId} not created yet`);
  }
   /*Access the name property of the corresponding object in holidays and log its value*/


let copied = { ...holidays[christmas] }; /*using the spread syntax (...) to create a shallow copy of the properties of the christmas object*/
copied.name = 'X-mas';
const correctDate = new Date(copied.date);
correctDate.setHours(0);
correctDate.setMinutes(0);
const isEarlier = correctDate < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);

console.log(`ID change: ${holidays[christmas].name === copied.name}`);
console.log(`Name change: ${copied.name}`);
console.log(`Date change: ${correctDate.toLocaleDateString('en-GB')}`);

// Get first holiday in the year

 //Calculate the minimum timestamp of holidays
const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime, // Access the "date" property of the first holiday object and get its timestamp
    holidays[1].date.getTime, // Access the "date" property of the second holiday object and get its timestamp
    holidays[2].date.getTime, // Access the "date" property of the third holiday object and get its timestamp
    holidays[3].date.getTime, // Access the "date" property of the fourth holiday object and get its timestamp
    holidays[4].date.getTime, // Access the "date" property of the fifth holiday object and get its timestamp
    holidays[5].date.getTime, // Access the "date" property of the sixth holiday object and get its timestamp
    holidays[6].date.getTime, // Access the "date" property of the seventh holiday object and get its timestamp
    holidays[7].date.getTime, // Access the "date" property of the eighth holiday object and get its timestamp
    holidays[8].date.getTime, // Access the "date" property of the ninth holiday object and get its timestamp
);

// Calculate the maximum timestamp of holidays
const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime, // Access the "date" property of the first holiday object and get its timestamp
    holidays[1].date.getTime, // Access the "date" property of the second holiday object and get its timestamp
    holidays[2].date.getTime, // Access the "date" property of the third holiday object and get its timestamp
    holidays[3].date.getTime, // Access the "date" property of the fourth holiday object and get its timestamp
    holidays[4].date.getTime, // Access the "date" property of the fifth holiday object and get its timestamp
    holidays[5].date.getTime, // Access the "date" property of the sixth holiday object and get its timestamp
    holidays[6].date.getTime, // Access the "date" property of the seventh holiday object and get its timestamp
    holidays[7].date.getTime, // Access the "date" property of the eighth holiday object and get its timestamp
    holidays[8].date.getTime, // Access the "date" property of the ninth holiday object and get its timestamp
);

const holidayIds = Object.keys(holidays).map(Number);
const firstHolidayId = Math.min(...holidayIds);
const firstHolidayDate = holidays[3].date;
console.log(`First holiday in the year: ${firstHolidayDate.toLocaleDateString('en-GB')}`);

// Get last holiday in the year
const lastHolidayId = Math.max(...holidayIds);
const lastHolidayDate = holidays[2].date;
console.log(`Last holiday in the year: ${lastHolidayDate.toLocaleDateString('en-GB')}`);

// Get random holiday date
const randomHolidayId = holidayIds[Math.floor(Math.random() * holidayIds.length)];
const randomHolidayDate = holidays[randomHolidayId].date;
console.log(`Random holiday date: ${randomHolidayDate.toLocaleDateString('en-GB')}`);
