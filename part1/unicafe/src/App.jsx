import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />  
    </div>
  )
}

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const averageFeedback = (good - bad) / (good + neutral + bad)
  const positivePercentFeedback = good / (good + neutral + bad)

  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
         <h1>statistics</h1>
         <p>No feedback given</p>
      </div>
    )
  } else return (
    <div>
      <h1>statistics</h1>
      <p>
        good {good}<br></br>
        neutral {neutral} <br></br>
        bad {bad}<br></br>
        all {good + neutral + bad} <br></br>
        average {averageFeedback} <br></br> 
        positive {positivePercentFeedback}
      </p>   
    </div>
  )
}

export default App