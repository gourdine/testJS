//Init storage
const storage = new Storage();

//get storage laocation data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//Init UI
const ui = new UI();

//get weather onload
document.addEventListener('DOMContentLoaded', getWeather());

//change location fields
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  //set location in local storage
  storage.setLocationData(city,state);

  //get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');


})


//convert wind deg to cardinal directions
function windDirectionFromDegrees(deg) {
  if (deg <= 44) {
  return 'North';
} else if (deg <= 89) {
  return 'NE'
} else if (deg <= 134) {
  return 'E'
} else if (deg <= 179) {
  return 'SE'
} else if (deg <= 224) {
  return 'South'
} else if (deg <= 269) {
  return 'SW'
} else if (deg <= 314) {
  return 'W'
} else  {
  return 'NW'
}
}

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results)
    })
    .catch( err => console.log(err));
    weather.get
}

function MetresPerSecondToMilesPerHour(mps) {
	let milesPerSecond = 0;
	let milesPerHour = 0;
	let milesPerHourRounded = 0;

	milesPerSecond = mps / 1609.34;
	milesPerHour = milesPerSecond * 3600;
	milesPerHourRounded = Math.round(milesPerHour);
	return milesPerHourRounded;
}

function convertKelvinToCelsius(kelvin) {
	if (kelvin < (0)) {
		return 'below absolute zero (0 K)';
	} else {
		let myCelcius = 0;
		let myCelciusRounded = 0;

		myCelcius = kelvin-273.15;
		myCelciusRounded = Math.round(myCelcius);
		return myCelciusRounded;
	}
}

function convertToF(celsius) {
  // make the given fahrenheit variable equal the given celsius value
  // multiply the given celsius value by 9/5 then add 32
  let fahrenheit = celsius * 9/5 + 32
  // return the variable fahrenheit as the answer
  return fahrenheit;
}
