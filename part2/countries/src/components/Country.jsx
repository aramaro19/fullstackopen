import { useState, useEffect } from "react"

import Weather from "./Weather"

import weatherService from "../services/weatherService"

const Country = ({ country }) => {
    const [weather, setWeather] = useState({})
  
    useEffect(() => {
      if(country) {
        weatherService
        .getWeather(country.name.common)
        .then(response => setWeather(response.data.current))
      }
    }, [country])
  
    if(country) {
      return (
        <div>
          <h1>{country.name.common}</h1>
          <div>capital {country.capital}</div>
          <div>area {country.area}</div>
          <h3>languages</h3>
          <ul>
           {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
          <img src={country.flags.png}/>
          <Weather weather={weather} name={country.name.common} />
        </div>
      )
    }
  }

  export default Country