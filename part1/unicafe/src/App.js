import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [good, SetGood] = useState(0)
  const [neutral, SetNeutral] = useState(0)
  const [bad, SetBad] = useState(0)

  return (
    <div className="App">
      <h1>Give Feedback</h1>

      <Button 
      text1="Good"
      text2="Nuetral"
      text3="Bad"
      handleClick1={()=>SetGood(good + 6)}
      handleClick2={()=>SetNeutral(neutral + 2)}
      handleClick3={()=>SetBad(bad + 1)} />

      <h1>Statistics</h1>

      <Display 
      ResultG={good}
      ResultN={neutral}
      ResultB={bad} />
    </div>
  );
}

export default App;
