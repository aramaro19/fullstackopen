import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  const setRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
  }

  const handleVote = () => {
    const votesArray = [...votes]
    votesArray[selected] += 1
    setVote(votesArray)
  }

  const getMostVoted = () => {
    let highest = votes[0]
    let highestIndex = 0
    votes.forEach((element, index) => {
      if(element > highest) {
        highest = element
        highestIndex = index
      }
    });
    return highestIndex
  }

  return (
    <div>
      <DisplayAnecdote header="Anecdote of the day" anecdotes={anecdotes} selected={selected} votes={votes}/>
      <Button text="vote" onClick={handleVote}/>
      <Button text="next anecdote" onClick={setRandomAnecdote} />
      <DisplayAnecdote header="Anecdote with most votes" anecdotes={anecdotes} selected={getMostVoted()} votes={votes} />
    </div>
  )
}

const DisplayAnecdote = ({ header, anecdotes, selected, votes }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{anecdotes[selected]}</p>
      has {votes[selected]} votes
    </div>
  )
}

const Button = ({ text, onClick }) =>  <button onClick={onClick}>{text}</button>

export default App