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
  document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`
  
  const data = createData()
  document.querySelector('[data-content]').i