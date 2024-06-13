import { useState, useEffect } from "react"

import countriesService from "./services/countriesService.js"

function App() {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    countriesService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchOnChange = event => setSearch(event.target.value)
  

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  if(filteredCountries.length > 10) {
    return (
      <div>
        find countries
        <input value={search} onChange={handleSearchOnChange}/>
        <div>Too many matches, specify another filter</div>
      </div>
    )
  } else if(filteredCountries.length > 1) {
    return (
      <div>
        find countries
        <input value={search} onChange={handleSearchOnChange}/>
          <ul>
            {filteredCountries.map(country => {
              return <div>
                <li key={country.name.common}>{country.name.common} <button onClick={() => setSearch(country.name.common)}>show</button></li>
              </div> 
            })}
          </ul>
      </div>
    )
  } else {
    return (
      <div>
        find countries
        <input value={search} onChange={handleSearchOnChange}/>
        <Country country={countries.find(country => country.name.common.toLowerCase().includes(search.toLowerCase()))}/>
      </div>
    ) 
  }
}

const Country = ({ country }) => {
  if(country) {
    console.log(country.languages)
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
      </div>
    )
  }
}

export default App
