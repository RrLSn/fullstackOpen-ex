import React from 'react'

const StatisticLine = (props) => {
    
  return (
    <tr>
        <td>{props.text}</td><td>{props.result}</td>
    </tr>
  )
}

export default StatisticLine