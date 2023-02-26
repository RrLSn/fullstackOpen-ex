import React from 'react'

const Display = (props) => {
    // const All = props.ResultG + props.ResultN + props.ResultB
    
  return (
    <div>
        <p>{props.text} {props.result}</p>
    </div>
  )
}

export default Display