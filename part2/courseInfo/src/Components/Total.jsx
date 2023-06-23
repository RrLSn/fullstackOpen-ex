import React from 'react'

const Total = ({course}) => {
  const exercises = course.parts

  const arrs = exercises.map((exercise) => {
    return exercise.exercises
  })

  const sum = arrs.reduce((sum,arr) => {
     sum += arr
     return sum
  },0)
  

    return(
        <div>
          <h4>
            Total of {sum} exercises
          </h4>
        </div>
      )
}

export default Total