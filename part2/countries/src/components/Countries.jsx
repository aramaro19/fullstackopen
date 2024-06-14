import Country from "./Country"

const Countries = ({ countries, filter, onClick }) => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    if(filteredCountries.length > 10) {
      return <div>Too many matches, specify another filter</div>
    } else if(filteredCountries.length > 1) {
      return <ul>
        {filteredCountries.map(country => {
          return <div key={country.name.common}>
            <li>{country.name.common} <button value={country.name.common} onClick={onClick}>show</button></li>
          </div> 
        })}
      </ul>
    } else {
      return <Country country={filteredCountries[0]} />
    }
}

export default Countries