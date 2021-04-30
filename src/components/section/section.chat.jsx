import React,{useEffect,useRef} from 'react';
import Bulma from '@vizuaalog/bulmajs';

import SectionChatmodal from './section.chat.modal';
const SectionChat = ({visible,func})=>{
  const modal = useRef()
  useEffect(()=>{
    if(visible)modal.current.style.display="block"
    else modal.current.style.display="none"
  })
    return(
        <div className="modal" ref={modal}style={{maxHeight:"100vh"}}>
          <div className="modal-background"></div>
          <div className="modal-content"style={{maxHeight:"100vh"}}>
            <SectionChatmodal/>
          </div>
          <button onClick={(e)=>{func(false)}} class="modal-close is-large" aria-label="close"></button>
        </div>  
    )
}
export default SectionChat;
