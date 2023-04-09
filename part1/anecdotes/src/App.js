import './App.css';
import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [vote, setVote] = useState([0,0,0,0,0,0,0,0])
  
  const handleClick = () => {
    const rand = Math.floor(Math.random() * anecdotes.length)
    setSelected(rand)
  }

  const handleVoteClick = () => {
    const copyVote = [...vote]
    copyVote[selected] = copyVote[selected]+1
    setVote(copyVote)
  }
  console.log(vote,'hello')
  return (
    <div style={{display: "flex", flexDirection: "column", placeItems:"center", alignItems:"center",padding:"10rem", textAlign:"center"}}>
      {anecdotes[selected]}
      <p>has {vote[selected]} Votes</p>
      <div style={{display: "flex", gap: "0.5rem"}}>
        <button onClick={handleVoteClick} style={{width:"10rem", height:"2rem", cursor: "pointer"}}>Vote</button>
        <button onClick={handleClick} style={{width:"10rem", height:"2rem",  cursor: "pointer"}}>Next anecdotes</button>
      </div>
    </div>
  )
}

export default App;
