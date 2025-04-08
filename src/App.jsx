import { useState } from 'react'

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

      good 
      <br />
      neutral
      <br />
      bad

    </div>
  )
}

export default App