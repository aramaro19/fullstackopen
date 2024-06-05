import { useState, useEffect } from 'react'

import personService from "./services/persons.js"

import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"
import Notification from './components/Notification.jsx'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])

  const addPerson = event => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if(persons.some(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to the phonebook. Replace the old number with a new one?`)) {
        personService
          .update(persons.find(person => person.name === newName).id, personObject)
          .then(response => {
            setPersons(persons.map(person => {
              if(person.name === newName) {
                return {...person, number:response.data.number}
              }
              return person
            }))
            setMessageAndClearFields(`Updated ${response.data.name}`)
        })
      }
    } else {
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setMessageAndClearFields(`Added ${response.data.name}`)
      })
    }
  }

  const removePerson = person => () => {
    if(window.confirm(`Delete ${person.name}`)) { 
      personService
      .remove(person.id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.data.id))
        setMessageAndClearFields(`Deleted ${response.data.name}`)
      })
    }
  }

  const setMessageAndClearFields = message => {
    setNewName("")
    setNewNumber("")
    setMessage(message)
        setTimeout(() => {
          setMessage(null)
        }, 3000);
  }


  const handleNameChange = event =>  setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleFilterChange = event => setNameFilter(event.target.value)


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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