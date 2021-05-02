import React from 'react';
import '../../css/section.content.css'
import GoogleMapComponent from './GoogleMapComponent';
import {useAnimator} from '../../hooks/useAnimator';

const SectionContactColumn = ()=>{
    //const [scroll,setScroll] = useState()
   useAnimator(".anime",-385,125)

    return(
        <div className="columns is-vcentered">
          
          <div className="column is-6"
               style={{fontFamily: '"Sofia", sans-serif'
                    ,fontSize:"4vw"
                    ,color:"white"
                    ,textShadow:"2px 2px 2px black"}}>

            <p style={{transform:"translateX(-380px)",width:"28vw"}}className="anime">Mi Ubicación...</p>
            <p style={{width:"2px"
                       ,height:"2px"
                       ,position:"fixed"
                       ,bottom:"0"
                       ,background:"red"}}
                       className="RefS"
                       ></p>
            <p style={{width:"2px"
                       ,height:"2px"
                       ,position:"fixed"
                       ,top:"0"
                       ,background:"red"}}
                       className="RefI"
                       ></p>
          </div>
          <div className="column">
          <GoogleMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBY6rX-jtj5nYq52neF2YYkIF6qQVRwx3s&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `50vh`,width:"100%",border:"2px solid blue"}} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          </div>
        </div>
    )
}
export default SectionContactColumn;