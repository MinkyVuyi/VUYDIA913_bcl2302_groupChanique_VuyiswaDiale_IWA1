const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
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
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9


// Do not change code above this comment

console.log(holidays[futureId] ? holidays[futureId].name : `ID ${futureId} not created yet`); // changed the logical OR operator 

const copied = { ...holidays[christmas] };
copied.name = 'X-mas';
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = correctDate < holidays[christmas].date;
console.log('New date is earlier:', isEarlier);
if (isEarlier) {
  copied.date = correctDate;
}

console.log('ID change:', copied.id !== holidays[christmas].id);
console.log('Name change:', copied.name !== holidays[christmas].name);
console.log('Date change:', copied.date.getTime() !== holidays[christmas].date.getTime());

const firstHoliday = new Date(holidays[0].date);
const lastHoliday = new Date(holidays[2].date);
const randomHoliday = new Date(holidays[Math.floor(Math.random() * Object.keys(holidays).length)].date);

console.log('First holiday in the year:', firstHoliday.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
console.log('Last holiday in the year:', lastHoliday.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
console.log('Random holiday:', randomHoliday.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }));
