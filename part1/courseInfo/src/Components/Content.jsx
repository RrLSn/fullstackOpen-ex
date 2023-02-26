import React from 'react'
import Part from './Part'

const Content = () => {
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises1: 10
  },
  {
    name:'Using props to pass data',
    exercises2: 7
  },
  {
    name:'State of a component',
    exercises3: 14
  }
]

    return(
        <div>
          <Part parts={parts[0].name} exercises={parts[0].exercises1}/>
          <Part parts={parts[1].name} exercises={parts[1].exercises2}/>
          <Part parts={parts[2].name} exercises={parts[2].exercises3}/>
        </div>
      )
}

export default Content