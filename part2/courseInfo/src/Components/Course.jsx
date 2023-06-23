import React from 'react'
import FirsCourseTotal from './FirstCourseTotal'
import SecondCourseTotal from './SecondCourseTotal'

const Course = ({course}) => {
  return (
    <div>
        <FirsCourseTotal course={course} />
        <SecondCourseTotal course={course} />
    </div>
  )
}

export default Course