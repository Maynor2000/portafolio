import React from 'react';

const HeaderContent = (props)=>{
    return(
        <>
<nav className="level">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Tweets</p>
      <p className="title">0</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Visitas</p>
      <p className="title">0</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">No me gusta</p>
      <p className="title">0</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Me gusta</p>
      <p className="title">0</p>
    </div>
  </div>
</nav>
        </>
    )
}

export default HeaderContent;