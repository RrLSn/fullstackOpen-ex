import React from 'react'

const Total = (props) => {
    return(
        <div>
          <p>
            Number of Exercise is {props.parts[0].exercises1 + props.parts[1].exercises2 + props.parts[2].exercises3}
            {/* Number of Exercise is {props.reduce((parts,exercises)=>{parts+exercises})} */}
          </p>
        </div>
      )
}

export default Total