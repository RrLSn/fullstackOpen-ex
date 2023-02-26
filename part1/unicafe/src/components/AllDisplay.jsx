import React from 'react'
import Display from './Display'

const AllDisplay = (props) => {
    if(props.All <= 0){
        return 'No Feedback Given'
    }else{
        return (
            <div>
                <Display text='Good' result={props.good}/>
                <Display text='Neutral' result={props.neutral}/>
                <Display text='Bad' result={props.bad} />
                <Display text='All' result={props.All} />
                <Display text='Average' result={props.Average} />
                <Display text='Positive' result={props.Positive} />
            </div>
          )
    }
 
}

export default AllDisplay