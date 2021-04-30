import React from 'react';
import SectionCard from '../section/section.card';
import SectioncontentCenter from '../section/section.content.center';
import '../../css/media.query.css';
//import Bulma from '@vizuaalog/bulmajs';
const SectionContent = ()=>{
    return (
      <div className="columns is-mobile is-gapless" id="is-mobile" style={{width:"100%"}}>
      <div className=" _card_r column" style={{}}>
        <SectionCard/>
      </div>
      <div className="column is-8_r is-vcentered">
        <SectioncontentCenter/>
      </div>
      <div className="column is-1"  >
        
      </div>
    </div>
    )
}

export default SectionContent;