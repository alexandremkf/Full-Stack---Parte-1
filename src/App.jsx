import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total == 0) {
    return <p>No feedback given</p>
  }
  
  return(
    <div>
      <StatisticLine text="good" value good />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button>good</button>
      <button>neutral</button>
      <button>bad</button>

      <h1>statistics</h1>

      <p>good </p>
      <p>neutral </p>
      <p>bad </p>

    </div>
  )
}

export default App