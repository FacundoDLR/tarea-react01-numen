import React from 'react'
import TravelCard from './TravelCard'

const TravellList = () => {
  return (
    <>
        <section>
            <div className='sectionTitle'>
                <h2>Unmissable</h2>
                <div className='sectionShow'>
                    <a href="#">Show all <span class="material-symbols-outlined">chevron_right</span></a>
                </div>
            </div>
            <TravelCard/>
        </section>
    </>
  )
}

export default TravellList