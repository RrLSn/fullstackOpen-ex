import React from 'react'

const Display = (props) => {
  return (
    <div>
        <p>Good: {props.ResultG}</p>
        <p>Neutral: {props.ResultN}</p>
        <p>Bad: {props.ResultB}</p>
    </div>
  )
}

export default Display