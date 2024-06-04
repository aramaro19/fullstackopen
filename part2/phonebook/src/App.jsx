import { useState } from 'react'

import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = event => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      setPersons(persons.concat(personObject))
      setNewName("")
      setNewNumber("")
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
      <Persons persons={persons} filter={nameFilter}/>
    </div>
  )
}


export default App