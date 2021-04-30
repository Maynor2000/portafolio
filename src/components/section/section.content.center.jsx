import React from 'react';
import SectionTitle from './section.center.title';
import SectionfirstText from './section.firstText';
import SectionGridImg from './section.grid.img';
import '../../css/media.query.css';
const SectioncontentCenter = ()=>{
    return(
<div class="container is-max-widescreen">
  <div class="notification is-primary">
    <SectionTitle/>
    <SectionfirstText/>
    <SectionGridImg/>
  </div>
</div>
    )
}
export default SectioncontentCenter;