import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.handleClick1}>{props.text1}</button>
        <button onClick={props.handleClick2}>{props.text2}</button>
        <button onClick={props.handleClick3}>{props.text3}</button>
    </div>
  )
}

export default Button