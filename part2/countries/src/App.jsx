import { useState, useEffect } from "react"

import countriesService from "./services/countriesService.js"

import Filter from "./components/Filter.jsx"
import Countries from "./components/Countries.jsx"

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

 return <div>
    <Filter search={search} handleOnChange={handleSearchOnChange} />
    <Countries countries={countries} filter={search} onClick={handleSearchOnChange} />
  </div>
}

export default App
