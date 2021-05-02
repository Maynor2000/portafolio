import React from 'react';
import '../../css/section.background.css';
import {useAnimator} from '../../hooks/useAnimator';
const SectionBackground = ()=>{
  useAnimator(".anime2",-865)
    return(
<section className="section is-medium bk ">
  <h1 className="title anime2" style={{color:"white"}}>Ejemplos de mis proyectos</h1>
  <h2 className="subtitle anime2" style={{color:"white"}}>
   A continuaccion de mostrara un pequeño grid con los ejemplos de mis proyectos realizados.
  </h2>
</section>
    )
}
export default SectionBackground;