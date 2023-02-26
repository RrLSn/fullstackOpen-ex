import React from 'react'

const Display = (props) => {
    // const All = props.ResultG + props.ResultN + props.ResultB
    
  return (
    <div>
        <p>Good: {props.resultG}</p>
        <p>Neutral: {props.resultN}</p>
        <p>Bad: {props.resultB}</p>
        <p>All: {props.all}</p>
        <p>Average: {props.average}</p>
        <p>Positive: {props.positive}</p>
    </div>
  )
}

export default Display