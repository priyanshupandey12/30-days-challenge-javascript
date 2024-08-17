const cityElement = document.querySelector('#city-name');
const weatherCondElement = document.querySelector('#weath-cond');
const tempElement = document.querySelector('#current-temp');
const forecastElement = document.querySelector('#forecast'); // New element to display the 5-day forecast
const search = document.querySelector('#city');
const button = document.querySelector('#search-btn');
const image=document.querySelector('#cloud-image')
const weather = async (cityName) => {
  // Check if cityName is not empty
  if (!cityName.trim()) {
    alert('Please enter a city name.');
    return;
  }

  try {
    const apiKey = '631426805ce649d9902151938240508'; // Your API key
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no`);
    
    if (!response.ok) {
      throw new Error('City not found or API request failed.');
    }

    const data = await response.json();

    // Update the HTML elements with the fetched data
    cityElement.innerHTML = `City: ${data.location.name}`;
    weatherCondElement.innerHTML = `Current Weather: ${data.current.condition.text}`;
    tempElement.innerHTML = `Current Temperature: ${data.current.temp_c}°C`;
    image.src = data.current.condition.icon;
    // Display the 5-day forecast
    forecastElement.innerHTML = '<h2 >5-Day Forecast</h2>';
    data.forecast.forecastday.forEach(day => {
      const date = new Date(day.date);
      forecastElement.innerHTML += `
        <div class="forecast-day">
          <h3>${date.toDateString()}</h3>
          <p>Weather: ${day.day.condition.text}</p>
          <p>Temperature: ${day.day.avgtemp_c}°C</p>
          <p>Humidity: ${day.day.avghumidity}%</p>
          <img src="${day.day.condition.icon}">
        </div>
      `;
    });
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Unable to fetch weather data. Please try again.');
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  // Get the city name from the input field
  const cityName = search.value;
  weather(cityName);
});
