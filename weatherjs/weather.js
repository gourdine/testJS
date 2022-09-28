class Weather{
  constructor(city, state){
    this.apikey = 'e153b2509cc7354a96c511cc1c462ce0';
    this.city = city;
    this.state = state;
  }

  async getWeather(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=e153b2509cc7354a96c511cc1c462ce0`);

    // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.state}{&limit=1&appid=${this.apikey}`)

    const responseData = await response.json();
    const statee = this.state;

    return responseData;

  }


  //change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}

