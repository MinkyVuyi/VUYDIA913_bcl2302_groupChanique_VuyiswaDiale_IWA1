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
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T22:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T22:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T22:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T22:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T22:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T22:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment

const createHtml = (athleteId) => {
  const athlete = data.response.data[athleteId];
  const { firstName, surname, races } = athlete;
  const latestRace = races[races.length - 1];
  const { date, time } = latestRace;
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = MONTHS[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const total = time.reduce((acc, lapTime) => acc + lapTime, 0);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  /*
* Get athlete data from the response data using athleteId
* Destructure athlete object to get firstName, surname, and races
* Get the latest race from the races array
* Destructure latestRace object to get date and time
* Create a Date object from the date string
* Get the day of the month
* Get the month name from the MONTHS array using the month index
* Get the year

* Calculate the total time by summing up all lap times in the time array
* Calculate the hours by dividing total time by 60 and rounding down
* Calculate the remaining minutes by taking the total time modulo 60

*/

  const fragment = document.createDocumentFragment();

  const title = document.createElement('h2');
  title.textContent = `Athlete: ${firstName} ${surname}`;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  list.innerHTML = /* html */ `
    <dt>Full Name</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);

  return fragment;
}

const sectionElements = document.querySelectorAll('section[data-athlete]');

sectionElements.forEach(section => {
  const athleteId = section.dataset.athlete;
  const htmlFragment = createHtml(athleteId);
  section.innerHTML = '';
  section.appendChild(htmlFragment);
});

