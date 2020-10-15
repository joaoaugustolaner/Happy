import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map} from 'react-leaflet'
import marker from '../images/marker.svg'
import {TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css'


function OrphanageMap() {
    return(
        <div id="page-map">
            <aside>
                
                <header>
                    <img src={marker} alt="Happy" />

                    <h2>Escolha um orfanato do mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong> São Leopoldo </strong>
                    <span> Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map center={[-29.7538125, -51.1062832]} zoom={15} style={{width: '100%', height: '100%'}}>
                <TileLayer  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapxbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_VARIABLE}`}/> */}
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFFF" />
            </Link>
        </div>
    ) 
}

export default OrphanageMap;