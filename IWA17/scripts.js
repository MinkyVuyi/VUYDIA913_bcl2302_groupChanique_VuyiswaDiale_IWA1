
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

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below

const createArray = (length) => {
	const result = [];
  
	for (let i = 0; i < length; i++) {
	  result.push(null);
	}
  
	return result;
  };
  
  const createData = () => {
	const current = new Date();
	current.setDate(1);
  
	const startDay = current.getDay();
	const daysInMonth = getDaysInMonth(current);
  
	const weeks = createArray(6);
	const days = createArray(7);
	let value = null;
  
	for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
	  value = {
		week: weekIndex + 1,
		days: [],
	  };
  
	  for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
		const day = dayIndex - startDay + 1 + (weekIndex * 7)
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
  
  const addCell = (existing, classString, value) => {
	return /* html */ `
	  <td class="${classString}">
		${value}
	  </td>
  
	  ${existing}
	`;
    };
  
  const createHtml = (data) => {
	let result = "";
  
	for (let i = 0; i  < data.length; i++) {
		const week = data[i];
	  let inner = "";
	  inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week.week}`);
  
	  for (let j = 0; j < week.days.length; j++){
		const day = week.day[j];
		let classString = "table__cell";
		const currentDate = new Date ();
		const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
		const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
		const isAlternate = week.week % 2 === 0;
  
		if (isToday){
			classString = `${classString} table__cell_today`;
		}
		if (isWeekend){
			classString = `${classString} table__cell_weekend`;
		}
		if (isAlternate){
			classString = `${classString} table__cell_alternate`;
		}
  
		inner = addCell(inner, classString, day.value || '');
	  }
  
	  result += `<tr>${inner}</tr>`;
	}
  
	return result;
  };
 
// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;


IWA JavaScript Fundamentals (2023)
IWA_01: Practical Example
IWA_02: Comments and Logging
IWA_03: Script Element and Modules
IWA_04: Variables and Lexical Scope
IWA_05: Branching Logic
IWA_06: Type Coercion
IWA_07: Strings and Logical Operators
IWA_08: Object Literal Syntax
IWA_09: Using Objects
IWA_10: Built-in Objects
IWA_11: Document Object Model
IWA_12: Style Object
IWA_13: Intro to Functions
IWA_14: Types of Functions
IWA_15: Arrays and Destructuring
IWA_16: Using Arrays
IWA_17: Loops
IWA_17.1: Lecture
IWA_17.2: Challenge 1
IWA_17.3: Project Submission IWA17
IWA_18: Event Listeners
IWA_19: Final Capstone Project
96% complete
Downloads and Media
IWA_17.2: Challenge 1
In the following exercise, you will be required to create a calendar that automatically calculates the current month and day and displays all dates in a grid format.

 

Note that you will need to organise days in a <html> table by their corresponding day of the week and the week in that month. You are supplied with both an index.html and styles.css file and are not allowed to change these.

 

You are also supplied with a scripts.js file. Note that you are only allowed to change the code between the two comments. In other words, you will primarily update the following functions:

createData
createCell
createHtml
At the moment the code is broken. However, apply everything you’ve learned thus far about JavaScript to have the table render the current month you are in (dynamically) as in the example below (however note that you are most likely in a different month and not March 2023).

 

Note that you should also highlight the current day in blue.

 

 

Summary:

HTML and CSS are provided. Don’t change these
Use the provided CSS classes to style the created elements
The current month and year should be displayed above the calendar
Each week must be indicated in the left most column (Always starts with Week 1, Week 2 etc.)
Weeks should alternate between white and grey
Each date of the month should be displayed under the corresponding weekday
The current day should be highlighted in blue
 

 

Extra reading material and tools to help you complete this challenge:
 

 

In this challenge you have to create a calendar, now this might sound daunting and a bit scary but believe it or not, you will be able to successfully complete this challenge if you have watched all the lecture videos, worked through the resources given and last but not least here are a few more resources to guide you in the right direction. Use your knowledge of arrays, loops, ternary operators, methods, and objects to complete this challenge.

 

MDN documentation on topics such as Date, Arrays, and Template literals to understand the correct usage and syntax for the functions and operations used in the code.
JavaScript Arrays
Template literals (Template strings) - JavaScript | MDN
Program Structure :: Eloquent JavaScript
Learn JavaScript | Codecademy
 

 



 

<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calendar</title>
        <link rel="stylesheet" href="/styles.css">
        <script src="/loops.js" defer type="module"></script>
    </head>

    <body>
        <h1 data-title>Loading...</h1>

        <table class="table">
            <thead>
                <tr>
                    <th class="table__cell table__cell_heading">Week</th>
                    <th class="table__cell table__cell_heading">Sun</th>
                    <th class="table__cell table__cell_heading">Mon</th>
                    <th class="table__cell table__cell_heading">Tue</th>
                    <th class="table__cell table__cell_heading">Wed</th>
                    <th class="table__cell table__cell_heading">Thu</th>
                    <th class="table__cell table__cell_heading">Fri</th>
                    <th class="table__cell table__cell_heading">Sat</th>
                </tr>
            </thead>

            <tbody data-content></tbody>
        </table>
    </body>
</html>
 

 

/* styles.css */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  font-family: sans-serif;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.9);
}

.table {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  white-space: nowrap;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 1);
}

.table__cell {
  width: 5rem;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border-collapse: collapse;
  border-right: 1px solid rgb(0, 0, 0, 0.1);
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
}

.table__cell_heading {
  border-bottom: 1px solid rgb(0, 0, 0, 1);
  background: rgba(0, 0, 0, 0.9);
  color: white;
}

.table__cell_today {
  color: blue;
  background: rgba(0, 0, 255, 0.1);
}

.table__cell_sidebar {
  color: rgba(0, 0, 0, 0.8);
  border-right: 1px solid rgb(0, 0, 0, 0.2);
  font-weight: normal;
  font-size: 0.8rem;
}

.table__cell_weekend {
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
}

.table__cell_alternate {
  background: rgba(0, 0, 0, 0.05);
}
 

 

// scripts.js

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
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (0, i, length) {
        result
    }
}

const createData = () => {
    const current = new Date
    current.setDate(1)

    startDay = current.day
    daysInMonth = getDaysInMonth(current)

    weeks = createArray(5)
    days = createArray(7)
    value = null

    for (weekIndex in weeks) {
        value = [{
            week: weekIndex + 1,
            days: []
        }]

        for (dayIndex in days) {
            value = dayIndex - startDay
            isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days = [{
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
            }]
        }
    }
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (week, days in data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
        for (dayOfWeek, value in days) {
            classString = table__cell
						isToday = new Date === value
            isWeekend = dayOfWeek = 1 && dayOfWeek == 7
            isAlternate = week / 2

            let classString = 'table__cell'

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === '{classString} table__cell_weekend'
            if (isAlternate) classString === '{classString} table__cell_alternate'
            addCell(inner, classString, value)
        }

        result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data);
