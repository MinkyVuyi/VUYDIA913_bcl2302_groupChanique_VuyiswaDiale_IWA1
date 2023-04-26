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

// Only edit below this comment
const createHtml = (athlete) => { //the argument was not being passed correctly
  const { firstName, surname, id, races } = athlete; //added const to these variables 
  const [latestRace] = races.slice(-1);
  const { date, time: lapTimes } = latestRace; //added lapTimes to the time and assigned it to get the latest race

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2'); // added const to the title and made h2 element an string
  title.textContent = id; //used textContent to get the text content of title
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day = new Date(date).getDate(); // used new date to get the new date for the day
  const month = MONTHS[new Date(date).getMonth()];
  const year = new Date(date).getFullYear(); //used getFullYear instead of just year

  /*
  *used reduce() method to iterate through an array of lapTimes.
  *calculated total time taken for all the laps.
  *acc short for accumulator and an initial value of '0' for the accumulator
  *calculated the number of hours taken for all the laps dividing it by 60 
  *used 'Math.floor()' method to round down and the result assigned to the 'hours' constant
  *the result is assigned to the 'minutes'
  */

  const totalLapTime = lapTimes.reduce((acc, lap) => acc + lap, 0); 
  const hours = Math.floor(totalLapTime / 60);
  const minutes = totalLapTime % 60;

  /*
  * separated the firstName and surname as they have different values assigned to them
  * added length to the Total Races
  * also separated day, month and year as they also have different values assigned to them
  * the first line converts the 'hours' value to a string
  * 
  */

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

  fragment.appendChild(list); //Append the list to the fragment
  const section = document.querySelector(`[data-athlete="${id}"]`); // To find the section in the DOM that the corresponding athlete ID
  section.appendChild(fragment); // Append the fragment containing the list to the section
};
/* Loop through the valuesArray.
* call the "createHtml" function on each value
*/
Object.values(data.response.data).forEach(createHtml);

