import React,{useState} from 'react';
import SectionCardGrid from './section.card.grid';
import SectionChat from './section.chat';
const SectionCardproject = (props)=>{
  const [visible,setVisible]=useState(false)
  const handleModal =(visibilidad)=>{
    setVisible(visibilidad)
  }
    return (
        <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={props.data.url} alt={props.data.nombre}/>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Placeholder image"/>
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{props.data.nombre}</p>
              <p class="subtitle is-6">{props.data.titulo}</p>
            </div>
          </div>
          <SectionCardGrid grid={props.data.grid}/>
          <div class="content">
            {props.data.descripcion}
            <br/>
            <time datetime={props.data.fecha}>{props.data.fecha}
            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <div className="control" style={{display:"inline-block"}}>
                <div className="tags has-addons" onClick={()=>{handleModal(true)}}>
                    <span className="tag is-dark">Contacto</span>
                    <span className="tag is-primary">Click +</span>
                </div>
            </div>
            <SectionChat visible={visible} func={handleModal}/></time>
          </div>
        </div>
      </div>
    )
}
export default SectionCardproject;