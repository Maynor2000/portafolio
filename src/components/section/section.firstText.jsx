import React from 'react';
import '../../css/section.content.css';
import '../../css/component.hover.css';
const SectionfirstText = ()=>{
    return(
<div class="columns">
  <div class="column">
    <div class="content">
        <ol className="">
            <h1 style={{fontFamily: '"Sofia", sans-serif'}}>Frontend</h1>
            <ol className="" type="1" style={{fontFamily: '"Sofia", sans-serif'}}>
                <li >React</li>
                <li >anime js</li>
                <li >Styled component</li>
                <li >Javascript</li>
                <li >Html</li>
                <li >Css</li>
                <li >Bulma</li>
                <li >Bootstrap</li>
            </ol>
        </ol>
    </div>
  </div>
  <div class="column">
  <div class="content">
        <ol>
            <h1 style={{fontFamily: '"Sofia", sans-serif'}}>Backend</h1>
            <ol type="1" style={{fontFamily: '"Sofia", sans-serif'}}>
                <li>Java EE</li>
                <li>Java SE</li>
                <li>Spring Framework</li>
                <li>Spring boot</li>
                <li>Spring security</li>
                <li>Hibernate jpa</li>
                <li>Sql</li>
                <li>Mysql</li>
            </ol>
        </ol>
    </div>
  </div>
  <div class="column">
  <div class="content">
        <ol>
            <h1 style={{fontFamily: '"Sofia", sans-serif'}}>Herramientas</h1>
            <ol type="1" style={{fontFamily: '"Sofia", sans-serif'}}>
                <li>phothoshop</li>
                <li>Adobe Ilustrator</li>
                <li>CorelDraw</li>
                <li>Visual studio code</li>
                <li>Eclipse</li>
                <li>NetBeans</li>
                <li>Git y Github</li>
            </ol>
        </ol>
    </div>
  </div>
</div>

    )
}
export default SectionfirstText;