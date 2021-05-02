import React,{useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
export const useAnimator = (classElement,possInit,possEnd)=>{
    let scroll =null; 
    const init = 0;
    let RefS = null;
    let viewportI = null;
    let viewportF = null;
    let viewportC = null;
    let distance=null;
    useEffect(()=>{

      const text = document.querySelector(classElement)
      distance = text.offsetTop; 
      const handleAnimate = (e)=>{
        scroll = window.scrollY;
        ((d)=>{
          const t = d.querySelector(".RefS")
           RefS = t.offsetTop;
           viewportI = scroll;
           viewportF = (scroll+RefS)
           viewportC = viewportI+(RefS/2)
           //console.log(viewportI+(RefS/2)+" distance ")
        })(document)

        if(viewportC>distance){
          anime({
          targets: classElement,
          translateX: possEnd||20,
          rotate: '1turn',
          duration: 2000,
        });
        }
        if(viewportC<distance){
          anime({
          targets: classElement,
          translateX: possInit||0,
          rotate: '2turn',
          duration: 2000,
        });
        }
      }
      window.addEventListener("scroll",handleAnimate)
    })
    return distance
}
export const useGridAnime = ()=>{
  
}