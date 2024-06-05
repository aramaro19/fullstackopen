
const Persons = ({ persons, filter, onRemoveHandler }) => {
    return (
      persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => {
          return <Person key={person.name} person={person} onClick={onRemoveHandler}/>})
    )
  }
  
  const Person = ({ person, onClick }) => ( <div>
    {person.name} {person.number}
    <button onClick={onClick(person)}>delete</button>
    </div>
  )

export default Persons