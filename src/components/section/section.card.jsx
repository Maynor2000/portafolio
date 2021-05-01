import React from 'react';
import Bulma from '@vizuaalog/bulmajs';
import img from '../../medias/images/img.jpg';
import '../../css/component.hover.css';
const SectionCard = ()=>{
    return(
        <div className="card" style={{width:"90%",margin:"auto",overflow:"hidden"}}>
        <div id="card-image" className="card-image" style={{overflow:"hidden"}}>
            <figure className="image is-4by3 _card_hover" style={{}}>
            <img src="" alt="Placeholder image"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-content">
                <p className="title is-4">Mayno Alvarez Acopa</p>
                <p className="subtitle is-6">@maykfullstack</p>
            </div>
            </div>

            <div className="content">
                Tengo 21 años actualmente soy estudiante de Ingenieria en computacion
                en la UADY, comenzé a programar a los 16 años esto debido a que desde
                pequeño me gustaba programar
            <br/>
            <time dateTime="2000-1-28">11:09 PM - 28 Enero 2000</time>
            </div>
        </div>
        </div>
    )
}
export default SectionCard;