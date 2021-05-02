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
export const useGridAnime = (classElement,row,column)=>{
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
          rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine'
          },
          targets: classElement,
          scale: [
            {value: .1, easing: 'easeOutSine', duration: 500},
            {value: 1, easing: 'easeInOutQuad', duration: 1200}
          ],
          delay: anime.stagger(200, {grid: [row, column], from: 'center'})
        });
      }
    }
    window.addEventListener("scroll",handleAnimate)
  })
  return distance
}
export const useButtonAnimator = ()=>{
  const setEvent = (classElement,grad,scale)=>{
    anime({
      targets: classElement,
      rotate: {
        value: grad||360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: scale||1,
        duration: 1600,
        delay: 10,
        easing: 'easeInOutQuart'
      },
      delay: 0 // All properties except 'scale' inherit 250ms delay
    });
    anime({
      targets: classElement,
      rotate: {
        value: -grad||-360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: -scale||-1,
        duration: 1600,
        delay: 10,
        easing: 'easeInOutQuart'
      },
      delay: 0 // All properties except 'scale' inherit 250ms delay
    });
  }
  return[setEvent]
 
}
