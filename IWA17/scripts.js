// scripts.js

// Define an array of month names
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Define a function to get the number of days in a month
const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Define a function to create an array of a given length
const createArray = (length) => Array.from({ length });

// Define a function to create the data for the calendar table
const createData = () => {
  // Create a new Date object set to the first day of the current month
  const current = new Date();
  current.setDate(1);

  // Get the day of the week of the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const startDay = current.getDay();

  // Get the number of days in the current month
  const daysInMonth = getDaysInMonth(current);

  // Create an array to hold the data for each week
  const weeks = createArray(5);

  // Iterate over each week and create the data for each day in that week
  weeks.forEach((week, weekIndex) => {
    const days = createArray(7).map((_, dayIndex) => {
      const day = dayIndex - startDay + 1;
      const isValid = day > 0 && day <= daysInMonth;

      return {
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : null,
      };
    });

    weeks[weekIndex] = {
      week: weekIndex + 1,
      days,
    };
  });

  return weeks;
};

// Define a function to create an HTML cell element with the given class and value
const createCell = (classString, value) =>
  `<td class="${classString}">${value}</td>`;

// Define a function to create the HTML for the calendar table
const createHtml = (data) => {
  // Iterate over each week and create the HTML for each day in that week
  const rowsHtml = data
    .map((week) => {
      const weekCell = createCell('table__cell table__cell_sidebar', `Week ${week.week}`);

      const daysCells = week.days
        .map((day) => {
          let classString = 'table__cell';
          const isToday = new Date().getDate() === day.value;
          const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
          const isAlternate = week.week % 2 === 0;

          if (isToday) classString += ' table__cell_today';
          if (isWeekend) classString += ' table__cell_weekend';
          if (isAlternate) classString += ' table__cell_alternate';

          return createCell(classString, day.value);
        })
        .join('');

      return `<tr>${weekCell}${daysCells}</tr>`;
    })
    .join('');

  // Wrap the rows in a table element and return the HTML
  return `<table>${rowsHtml}</table>`;
};

// Get the element for the month title and set its text to the current month and year
const titleElement = document.querySelector('[data-title]');
const current = new Date();
titleElement.innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

// Get the element for the calendar

/*const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length, defaultValue) => {
return Array.from({ length }, () => defaultValue);
};

const createData = () => {
const current = new Date();
current.setDate(1);

const startDay = current.getDay();
const daysInMonth = getDaysInMonth(current);

const weeks = createArray(6, { week: 0, days: createArray(7, null) });
let value = null;

for (let weekIndex in weeks) {
  value = {
    week: parseInt(weekIndex) + 1,
    days: [],
  };

  for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
    const day = weekIndex * 7 + dayIndex - startDay + 1;
    const isValid = day > 0 && day <= daysInMonth;

    value.days.push({
      dayOfWeek: dayIndex + 1,
      value: isValid ? day : null,
    });
  }

  weeks[weekIndex] = value;
}

return weeks;
};

const addCell = (classString, value, isToday) => {
  if (isToday) {
    classString += ' table_cell_today'; // add the "table_cell_today" class for the current date
    value = `${value}`; //To add the color to the text
  }

  return /* html *`
    <td class="${classString}">
      ${value}
    </td>
  `;
};

const createHtml = (data) => {
let result = '';

for (let week of data) {
  let inner = '';
  inner += addCell('table_cell table_cell_sidebar', `Week ${week.week}`);

  for (let day of week.days) {
    let classString = 'table__cell';
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00:00
    const isToday =
      day.value &&
      new Date(current.getFullYear(), current.getMonth(), day.value).getTime() === today.getTime();
    const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
    const isAlternate = week.week % 2 === 0;

    if (isWeekend) classString += ' table__cell_weekend';
    if (isAlternate) classString += ' table__cell_alternate';

    inner += addCell(classString, day.value || '', isToday);
  }

  result += `<tr>${inner}</tr>`;
}

return result;
};

  

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);
*/