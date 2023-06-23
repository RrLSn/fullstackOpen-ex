import React from 'react'

const Total = ({course}) => {
  const exercises = course.parts

  const exercisesArr = exercises.map((exercise) => {
    return exercise.exercises
  })

  const total = exercisesArr.reduce((sum,arr) => {
     sum += arr
     return sum
  },0)
  

    return(
        <div>
          <h4>
            Total of {total} exercises
          </h4>
        </div>
      )
}

export default Total