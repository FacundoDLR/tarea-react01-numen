import React from 'react';
import TravelDescription from './TravelDescription';
import TravelImg from './TravelImg';

const TravelCard = (props) => {
  return (
    <>
        {/* <div className='travelCard'>
            <TravelImg />
            <TravelDescription />
        </div> */}
        <div className="travelCard">
            <div className='travelImg'>
                <img src={props.destinos.img} alt="" />
            </div>
            <div className='travelDescription'>
                <h3>{props.destinos.title}</h3>
                <p>{props.destinos.description}</p>
            </div>
        </div>
    </>
  )
}

export default TravelCard