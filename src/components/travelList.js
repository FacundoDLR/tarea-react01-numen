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
            <div className="travelList">
                {
                    destinos.map(
                        destino => 
                        <TravelCard key = {destino.id} destinos = {destino}/>)
                }
            </div>
            <div className='credit'>
                <h5>tarjetas originales de la pagina oficial de <a href="https://www.visititaly.eu/">https://www.visititaly.eu/</a></h5>
            </div>
        </section>
    </>
  )
}
const images = require.context("../images", true);

const destinos = [
    {
        id: 1,
        img: images("./destino06.jpg"),
        title: "Liguria",
        description: "From the Cinque Terre to Portofino and Genoa"
    },
    {
        id: 2,
        img: images("./destino02.jpg"),
        title: "Sicily",
        description: "From Palermo to Catania and Agrigento"
    },
    {
        id: 3,
        img: images("./destino03.jpg"),
        title: "Trentino-Alto Adige",
        description: "From Dolomities to Ortisei and Riva del Garda"
    },
    {
        id: 4,
        img: images("./destino04.jpg"),
        title: "Veneto",
        description: "From Venice to Verona and the Dolomites Park"
    },
    {
        id: 5,
        img: images("./destino05friuli-venezia-giulia.jpg"),
        title: "Friuli Venezia Giulia",
        description: "From Trieste to Udine"
    },
]

export default TravellList