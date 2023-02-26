import React from 'react'
import StatisticLine from './StatisticLine'

const AllDisplay = (props) => {
    if(props.All <= 0){
        return 'No Feedback Given'
    }else{
        return (
            <div>
                <StatisticLine text='Good' result={props.good}/>
                <StatisticLine text='Neutral' result={props.neutral}/>
                <StatisticLine text='Bad' result={props.bad} />
                <StatisticLine text='All' result={props.All} />
                <StatisticLine text='Average' result={props.Average} />
                <StatisticLine text='Positive' result={props.Positive} />
            </div>
          )
    }
 
}

export default AllDisplay