import React from 'react'
// import destino06 from '../images/destino06.jpg'

const TravelImg = (props) => {
  return (
    <div className='travelImg'>
        <img src={props.destinos.img} alt="" />
    </div>
  )
}

export default TravelImg