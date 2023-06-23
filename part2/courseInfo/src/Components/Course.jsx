import React from 'react'
import Total from './Total'

const Course = ({course}) => {
  return (
    <div>
        <h1>{course.name}</h1>
        {
            course.parts.map((part) => {
                return <p key={part.id}>{part.name} {part.exercises}</p>
            })
        }
        <Total course={course}/>
    </div>
  )
}

export default Course