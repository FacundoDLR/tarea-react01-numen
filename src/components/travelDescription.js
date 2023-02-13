import React from 'react'

const TravelDescription = (props) => {
  return (
    <div className='travelDescription'>
        <h3>{props.destinos.title}</h3>
        <p>{props.destinos.description}</p>
    </div>
  )
}

export default TravelDescription