class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    // this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].main;
    this.string.textContent = `${Math.floor(convertToF(weather.main.temp))} F (${weather.main.temp} C)`;
    // this.icon.setAttribute('scr', weather.weather[0].icon);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${Math.floor(convertToF(weather.main.feels_like))} F (${weather.main.feels_like} C)`;
    this.dewpoint.textContent = `Pressure: ${weather.main.pressure} hPa`;
    this.wind.textContent = `Wind: From ${windDirectionFromDegrees(weather.wind.deg)} at ${MetresPerSecondToMilesPerHour(weather.wind.speed)} MPH`;
  }
}