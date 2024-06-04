
const Persons = ({ persons, filter }) => {
    return (
      persons
        .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
        .map(person => {
          return <Person key={person.name} person={person}/>})
    )
  }
  
  const Person = ({person}) => <div>{person.name} {person.number}</div>

export default Persons