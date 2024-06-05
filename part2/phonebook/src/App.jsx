import { useState, useEffect } from 'react'

import personService from "./services/persons.js"

import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName("")
        setNewNumber("")
      })
    }
  }

  const removePerson = person => () => {
    if(window.confirm(`Delete ${person.name}`)) { 
      personService
      .remove(person.id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.data.id))
      })
    }
  }


  const handleNameChange = event =>  setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleFilterChange = event => setNameFilter(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter inputValue={nameFilter} onChangeHandler={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        onSubmitHandler={addPerson}
        nameInputValue={newName}
        nameOnChangeHandler={handleNameChange}
        numberInputValue={newNumber}
        numberOnChangeHandler={handleNumberChange}  />
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        filter={nameFilter} 
        onRemoveHandler={removePerson}/>
    </div>
  )
}


export default App