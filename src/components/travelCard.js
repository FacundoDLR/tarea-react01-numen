import React from 'react';
import TravelDescription from './TravelDescription';
import TravelImg from './TravelImg';

const TravelCard = () => {
  return (
    <>
        <div className='travelCard'>
            <TravelImg />
            <TravelDescription />
        </div>
    </>
  )
}

export default TravelCard