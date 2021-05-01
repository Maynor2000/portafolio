import React from 'react';
import {useState,useEffect} from 'react';
import '../../css/section.grid.project.css';
import SectionCardproject from './section.card.project';

const SectionGridProject = ()=>{

  const nombres = [{nombre:"Maynor Alvarez Acopa",
                    titulo:"React",
                    url:"https://www.mundodelmotor.net/wp-content/uploads/2018/12/autos-modificados_opt.jpg",
                    descripcion:"esta tarjeta es generada dinámicamente con los datos del backend",
                    fecha:"28/04/2021",
                    grid:["https://img.icons8.com/color/48/000000/react-native.png",
                          "https://img.icons8.com/color/48/000000/javascript.png",
                          "https://img.icons8.com/color/48/000000/html-5--v2.png",
                          "https://img.icons8.com/color/48/000000/spring-logo.png",
                          "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"]},]                      
    return (
<div className="columns is-multiline is-mobile is-primary">
  {nombres.map((el)=>(
    <div className="column is-one-quarter" id="is_one_quarter">
      <SectionCardproject data={el}/>
    </div>
  ))}

</div>
    )
}
export default SectionGridProject
