// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  response: {
    requestType: 'FETCH_ATHLETE_DATA',
    requestBy: 'ALL_MATCHING_ATHLETES',
    forDisplay: 'BEST_RACES',

    data: {
      NM372: {
        firstName: 'Nwabisa',
        surname: 'Masiko',
        id: 'NM372',
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: 'Schalk',
        surname: 'Venter',
        id: 'SV782',
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

const createHtml = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);
  const { date, time: lapTimes } = latestRace;

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day = new Date(date).getDate();
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear();

  const totalLapTime = lapTimes.reduce((acc, lap) => acc + lap, 0);
  const hours = Math.floor(totalLapTime / 60);
  const minutes = totalLapTime % 60;

  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
    
  `;
  fragment.appendChild(list);
  const section = document.querySelector(`[data-athlete="${id}"]`);
  section.appendChild(fragment);
};
Object.values(data.response.data).forEach(createHtml);





/*The createHtml function takes an athlete argument, but the argument is not being passed correctly.
 Instead of firstName, surname, id, races = athlete, we need to use array destructuring: const {firstName, surname, id, races} = athlete.
The title element is not being created correctly. Instead of title = document.
createElement(h2);, we need to use quotes to create an h2 element: const title = document.createElement("h2");. Similarly, we need to set the textContent property of the title element to the id of the athlete: title.textContent = id;.
The date object is not being parsed correctly.
Instead of const day = date.getDate(); const month = MONTHS[date.month]; const year = date.year;, we need to use the new Date() constructor to create a new date object from the ISO date string, and then extract the day, month, and year using the getDate(), getMonth(), and getFullYear() methods, respectively.
 We also need to subtract 1 from the month value because the getMonth() method returns a zero-based index: const eventDate = new Date(date); const day = eventDate.getDate(); const month = MONTHS[eventDate.getMonth()]; const year = eventDate.getFullYear();.
The timeAsArray variable is not defined.
 Instead of first, second, third, fourth = timeAsArray;, we need to use array destructuring to extract the lap times from the time array: const [fourth, third, second, first] = time;.
The calculation of the total time is incorrect.
 Instead of const hours = total / 60; const minutes = total / hours / 60;, we need to calculate the total time in minutes, and then convert it to hours and minutes using the Math.floor() and String.padStart() methods: const totalMinutes = time.reduce((acc, cur) => acc + cur, 0); const hours = Math.floor(totalMinutes / 60); const minutes = String(totalMinutes % 60).padStart(2, "0");.
The list items are not being created correctly.
Instead of const list = document.createElement(dl);, we need to use quotes to create a dl element: const list = document.
createElement("dl");.
 Similarly, we need to create dt and dd elements using quotes: const dt1 = document.createElement("dt"); const dd1 = document.createElement("dd");.
The values of the list items are not being set correctly.
 Instead of ${firstName surname}, we need to use string interpolation to concatenate the firstName and surname properties: ${firstName} ${surname}. Similarly, we need to use string interpolation to display the races value: ${races.length}.
The date and time values are not being displayed correctly.
 Instead of dd2.textContent = ${day} ${month} ${year}; and dd3.
 textContent = ${hours}:${minutes};, we need to use string interpolation to format the date and time values according to the TR35 standard: dd2.textContent = ${day} ${month} ${year}.toUpperCase(); and dd3.textContent = ${String(hours).padStart(2, "0")}:${minutes};.*/
 