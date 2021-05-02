import React,{useEffect} from 'react';
export const useNavFixed = (cassComponent)=>{
    let minav= null;
    let scroll = null;
    let Hnav = null;
      useEffect(()=>{
        minav = document.querySelector(cassComponent)
        Hnav = minav.offsetTop
      },[])
      useEffect(()=>{
        const handleScroll = ()=>{
          scroll= window.scrollY
          if(scroll>Hnav+2){
            minav.style.position="fixed";
            minav.style.width="100%"
            minav.style.boxShadow="1px 1px 10px black";
        }else{
          minav.style.position="static";
          minav.style.boxShadow="none";
        }
        }
  
        window.addEventListener("scroll",handleScroll)
      })
}