import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [good, SetGood] = useState(0)
  const [neutral, SetNeutral] = useState(0)
  const [bad, SetBad] = useState(0)
  const All = (good + neutral + bad)
  const Average = (bad + neutral)/ good
  const Positive = (good * 100) /All + "%"

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

      <Display text='Good' result={good}/>
      <Display text='Neutral' result={neutral}/>
      <Display text='Bad' result={bad} />
      <Display text='All' result={All} />
      <Display text='Average' result={Average} />
      <Display text='Positive' result={Positive} />
    </div>
  );
}

export default App;
