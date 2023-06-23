import React from 'react'

const SecondCourseTotal = ({course}) => {
  const exercises = course[1].parts

  const exercisesArr = exercises.map((exercise) => {
    return exercise.exercises
  })

  const total = exercisesArr.reduce((sum,arr) => {
    sum += arr
    return sum
  },0)

  return (
    <div>
        <h2>{course[1].name}</h2>
        {
            exercises.map((part) => {
                return <p key={part.id}>{part.name} {part.exercises}</p>
            })
        }
        <h4>Total of {total} exercises</h4>
    </div>
  )
}

export default SecondCourseTotal