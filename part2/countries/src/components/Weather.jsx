const Weather = ({ weather, name }) => {
  console.log(weather)
    if(weather.temp_c) {
      return (
        <div>
          <h2>Weather in {name}</h2>
          temperature {weather.temp_c} Celcius
          <div><img src={weather.condition.icon}/></div>
          wind {weather.wind_kph} km/h
        </div>
      )
    }
}

export default Weather