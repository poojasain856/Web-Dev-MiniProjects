const timezones = [
    { name: 'New York', timezone: 'America/New_York' },
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Kolkata', timezone: 'Asia/Kolkata' },

    // Add more timezones as needed
  ];
  
  function updateTimes() {
    const timeList = document.getElementById('timeList');
    timeList.innerHTML = '';
  
    for (const timezone of timezones) {
      const formattedTime = getFormattedTime(new Date(), timezone.timezone);
      const listItem = document.createElement('li');
      listItem.textContent = `${timezone.name}: ${formattedTime}`;
      timeList.appendChild(listItem);
    }
  }
  
  function getFormattedTime(date, timezone) {
    const options = {
      timeZone: timezone,
      hour12: false,
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
  
    return date.toLocaleString('en-US', options);
  }
  
  // Update the times initially
  updateTimes();
  
  // Update the times every 1000 milliseconds (1 second)
  setInterval(updateTimes, 1000);
  