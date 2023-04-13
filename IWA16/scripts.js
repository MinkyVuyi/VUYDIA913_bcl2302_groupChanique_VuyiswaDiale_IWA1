// scripts.js

// Data structure containing information about athletes
const data = {
  NM372: {
    id: 'NM372',
    firstName: 'Nwabisa',
    surname: 'Masiko',
    lapTimes: [30, 29], // Array of lap times in minutes
  },
  SV782: {
    id: 'SV782',
    firstName: 'Schalk',
    surname: 'Venter',
    lapTimes: [31, 28, 29, 31], // Array of lap times in minutes
  }
};

// Function to format minutes as HH:MM
const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

// Function to format date as d MM YYYY
const formatDate = (date) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

// Function to populate athlete sections with data
const populateAthleteSections = () => {
  const athleteSections = document.querySelectorAll('section[data-athlete]');
  athleteSections.forEach(section => {
    const athleteId = section.dataset.athlete;
    const athleteData = data[athleteId];
    if (athleteData) {
      const fullName = `${athleteData.firstName} ${athleteData.surname}`;
      const totalRaces = athleteData.lapTimes.length;
      const latestRaceIndex = athleteData.lapTimes.length - 1;
      const latestRaceDate = new Date(); // Placeholder for latest race date
      const latestRaceTime = athleteData.lapTimes[latestRaceIndex];
      const latestRaceFormattedDate = formatDate(latestRaceDate);
      const latestRaceFormattedTime = formatTime(latestRaceTime);
      
      // Populate section with athlete information
      section.innerHTML = `
        <h2>${athleteData.id}</h2>
        <dl>
          <dt>Full Name</dt>
          <dd>${fullName}</dd>
          <dt>Total Races</dt>
          <dd>${totalRaces}</dd>
          <dt>Event Date (Latest)</dt>
          <dd>${latestRaceFormattedDate}</dd>
          <dt>Total Time (Latest)</dt>
          <dd>${latestRaceFormattedTime}</dd>
        </dl>
      `;
    } else {
      section.innerHTML = '<p>Athlete data not found</p>';
    }
  });
};

// Call the function to populate athlete sections with data
populateAthleteSections();
