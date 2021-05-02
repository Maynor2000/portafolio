import React from 'react';
import '../../css/animate.like.css';
import {useButtonAnimator} from '../../hooks/useAnimator';
const HeaderContent = (props)=>{
  const[setEvent] = useButtonAnimator()
  const handleAnimate = (e)=>{
    if(e.target.matches(".bt1")){
      setEvent(".bt1",760,1.2)
      
    }
    if(e.target.matches(".bt2")){
      setEvent(".bt2",760,1.2)
      
    }
    

  }
    return(
        <>
<nav className="level">
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Visitas</p>
      <p className="title">0</p>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">No me gusta</p>
      <p className="title" style={{display:"inline-block"}}>0</p>{"\u00A0"}{"\u00A0"}
        <svg onClick={handleAnimate} id="like" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-star bt1" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <p className="heading">Me gusta</p>
      <p className="title" style={{display:"inline-block"}}>0</p>{"\u00A0"}{"\u00A0"}
        <svg onClick={handleAnimate} id="like"xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-star bt2" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
    </div>
  </div>
</nav>
        </>
    )
}

export default HeaderContent;