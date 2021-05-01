import React,{useEffect,useRef,useState} from 'react';
import Bulma from '@vizuaalog/bulmajs';

const NavBar = (props)=>{
  const nav = useRef()
  const[scroll,setScroll] = useState()
  const[Hnav,setHnav] = useState()
/*  
    useEffect(()=>{
      const minav=document.querySelector("#nav")
      setHnav(minav.offsetTop)
    },[])
    useEffect(()=>{
      let scrolly = window.scrollY
      
      const handleScroll = ()=>{
        setScroll(scrolly)
      }
      if(scrolly>Hnav+2){
        nav.current.style.position="fixed";
        nav.current.style.width="100%"
        nav.current.style.boxShadow="1px 1px 10px black";
      }else{
        nav.current.style.position="static";
        nav.current.style.boxShadow="none";
      }
      window.addEventListener("scroll",handleScroll)
    },[scroll])
*/
    return(
<nav id="nav" className="navbar is-primary "style={{width:"vw"}} ref={nav}>
  <div className="navbar-brand">
    <a className="navbar-item" href="#">
        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im01MDQgMTQ4Ljc2MnYxMDQuOTY5YzAgOS4zNjktNC4yMTYgMTguMjMzLTExLjQ4MiAyNC4xNDgtMjQuNzg2IDIwLjE3OS05My4wNDIgNjEuNDgxLTIzNi41MTggNjEuNDgxcy0yMTEuNzMyLTQxLjMwMi0yMzYuNTE4LTYxLjQ4Yy03LjI2Ni01LjkxNS0xMS40ODItMTQuNzc5LTExLjQ4Mi0yNC4xNDh2LTEwNC45N2MwLTE3LjE5MyAxMy45MzctMzEuMTMgMzEuMTMtMzEuMTNoNDMzLjc0YzE3LjE5MyAwIDMxLjEzIDEzLjkzOCAzMS4xMyAzMS4xM3oiIGZpbGw9IiM5YzhmOWEiLz48cGF0aCBkPSJtNTA0IDE0OC43NjJ2MTA0Ljk2OWMwIDkuMzY5LTQuMjE2IDE4LjIzMy0xMS40ODIgMjQuMTQ4LTI0Ljc4NiAyMC4xNzktOTMuMDQyIDYxLjQ4MS0yMzYuNTE4IDYxLjQ4MXMtMjExLjczMi00MS4zMDItMjM2LjUxOC02MS40OGMtNy4yNjYtNS45MTUtMTEuNDgyLTE0Ljc3OS0xMS40ODItMjQuMTQ4di0xMDQuOTdjMC0xNy4xOTMgMTMuOTM3LTMxLjEzIDMxLjEzLTMxLjEzaDQzMy43NGMxNy4xOTMgMCAzMS4xMyAxMy45MzggMzEuMTMgMzEuMTN6IiBmaWxsPSIjOWM4ZjlhIi8+PHBhdGggZD0ibTUwNCAxNDguNzYydjEwNC45NjljMCA5LjM2OS00LjIxNiAxOC4yMzMtMTEuNDgyIDI0LjE0OC0yNC43ODYgMjAuMTc5LTkzLjA0MiA2MS40ODEtMjM2LjUxOCA2MS40ODFzLTIxMS43MzItNDEuMzAyLTIzNi41MTgtNjEuNDhjLTcuMjY2LTUuOTE1LTExLjQ4Mi0xNC43NzktMTEuNDgyLTI0LjE0OHYtMTA0Ljk3YzAtMTcuMTkzIDEzLjkzNy0zMS4xMyAzMS4xMy0zMS4xM2g0MzMuNzRjMTcuMTkzIDAgMzEuMTMgMTMuOTM4IDMxLjEzIDMxLjEzeiIgZmlsbD0iIzQwNzA5MyIvPjxwYXRoIGQ9Im00OTIuNTE4IDI1OS44OGMtMjQuNzg2IDIwLjE3OC05My4wNDIgNjEuNDgtMjM2LjUxOCA2MS40OHMtMjExLjczMi00MS4zMDItMjM2LjUxOC02MS40OGMtNy4yNjYtNS45MTUtMTEuNDgyLTE0Ljc3OS0xMS40ODItMjQuMTQ4djE4YzAgOS4zNjkgNC4yMTYgMTguMjMzIDExLjQ4MiAyNC4xNDggMjQuNzg2IDIwLjE3OCA5My4wNDIgNjEuNDggMjM2LjUxOCA2MS40OHMyMTEuNzMyLTQxLjMwMiAyMzYuNTE4LTYxLjQ4MWM3LjI2Ni01LjkxNSAxMS40ODItMTQuNzc5IDExLjQ4Mi0yNC4xNDh2LTE4YzAgOS4zNy00LjIxNiAxOC4yMzQtMTEuNDgyIDI0LjE0OXoiIGZpbGw9IiMzNjVlN2QiLz48cGF0aCBkPSJtMjU2IDMzOS4zNmMtMTQwLjk1NCAwLTIwOS4zMDUtMzkuODYxLTIzNS4xNjctNjAuMzk2djE2Mi44MmMwIDE3LjE5MyAxMy45MzcgMzEuMTMgMzEuMTMgMzEuMTNoNDA4LjA3NGMxNy4xOTMgMCAzMS4xMy0xMy45MzcgMzEuMTMtMzEuMTN2LTE2Mi44MmMtMjUuODYyIDIwLjUzNS05NC4yMTMgNjAuMzk2LTIzNS4xNjcgNjAuMzk2eiIgZmlsbD0iIzM2NWU3ZCIvPjxwYXRoIGQ9Im0yMC44MzMgMjc4Ljk2NXYxOGMyNS44NjIgMjAuNTM1IDk0LjIxMyA2MC4zOTUgMjM1LjE2NyA2MC4zOTVzMjA5LjMwNS0zOS44NjEgMjM1LjE2Ny02MC4zOTZ2LTE4Yy0yNS44NjIgMjAuNTM1LTk0LjIxMyA2MC4zOTYtMjM1LjE2NyA2MC4zOTZzLTIwOS4zMDUtMzkuODYxLTIzNS4xNjctNjAuMzk1eiIgZmlsbD0iIzJiNGQ2NiIvPjxwYXRoIGQ9Im0yNTUuOTk3IDM3OC42Yy0xNi4xMDUgMC0yOS4xNi0xMy4wNTUtMjkuMTYtMjkuMTZ2LTM1LjY4YzAtNS43MzEgNC42NDYtMTAuMzc3IDEwLjM3Ni0xMC4zNzdoMzcuNTY2YzUuNzMxIDAgMTAuMzc3IDQuNjQ2IDEwLjM3NyAxMC4zNzd2MzUuNjhjMCAxNi4xMDQtMTMuMDU1IDI5LjE2LTI5LjE1OSAyOS4xNnoiIGZpbGw9IiNmZmUyN2EiLz48cGF0aCBkPSJtMjU1Ljk5NyAzNjAuNmMtMTYuMTA1IDAtMjkuMTYtMTMuMDU1LTI5LjE2LTI5LjE2djE4YzAgMTYuMTA0IDEzLjA1NSAyOS4xNiAyOS4xNiAyOS4xNnMyOS4xNi0xMy4wNTUgMjkuMTYtMjkuMTZ2LTE4Yy0uMDAxIDE2LjEwNC0xMy4wNTYgMjkuMTYtMjkuMTYgMjkuMTZ6IiBmaWxsPSIjZjljZjU4Ii8+PHBhdGggZD0ibTIwMy44NyAxMTcuNjMydi0zNC4zNDNjOC45NDctNC41NjYgMjYuODM3LTExLjYgNTIuMTI3LTExLjZzNDMuMTggNy4wMzUgNTIuMTI3IDExLjZ2MzQuMzQ0aDMyLjYwM3YtNDMuNTc2YzAtNS4wODUtMi4zNzMtOS44OC02LjQxOC0xMi45NjMtLjgwNi0uNjE0LTguMjYtNi4xNi0yMS41NDEtMTEuNDk4LTE3LjEwOS02Ljg3Ni0zNi43NDEtMTAuNTExLTU2Ljc3MS0xMC41MTEtMjAuMDMxIDAtMzkuNjYyIDMuNjM1LTU2Ljc3MiAxMC41MTEtMTMuMjggNS4zMzctMjAuNzM1IDEwLjg4My0yMS41NDEgMTEuNDk4LTQuMDQ0IDMuMDg0LTYuNDE3IDcuODc3LTYuNDE3IDEyLjk2M3Y0My41NzZoMzIuNjAzeiIgZmlsbD0iI2U4ODM0ZCIvPjxnIGZpbGw9IiNkNjZlNDEiPjxwYXRoIGQ9Im0xNzEuMjY3IDk5LjYzM2gzMi42MDN2MThoLTMyLjYwM3oiLz48cGF0aCBkPSJtMzA4LjEyNCA5OS42MzNoMzIuNjAzdjE4aC0zMi42MDN6Ii8+PC9nPjwvZz48cGF0aCBkPSJtNDczLjI5NCAxMDkuODQ3aC0xMjQuODg3di0zNi4xNDZjMC03LjM5Mi0zLjUwOS0xNC40ODEtOS4zODgtMTguOTY1LTEuNDUzLTEuMTA4LTkuNDA4LTYuOTE5LTIzLjMzNy0xMi41MTctNS44OTEtMi4zNjctMTIuMTI5LTQuMzk0LTE4LjU0NS02LjAyMy00LjAyLTEuMDIzLTguMTEyIDEuNDEtOS4xMzQgNS40MzMtMS4wMjEgNC4wMjIgMS40MTEgOC4xMTEgNS40MzQgOS4xMzMgNS43NyAxLjQ2NiAxMS4zNjkgMy4yODQgMTYuNjQxIDUuNDAyIDEyLjYwMSA1LjA2NCAxOS41NCAxMC4zMDMgMTkuODI5IDEwLjUyMyAyLjE3NCAxLjY1OCAzLjQ3MiA0LjI3OSAzLjQ3MiA3LjAxM3YzNi4xNDdoLTE3LjYzN3YtMjYuODk2YzAtMi44MjQtMS41ODMtNS40MS00LjA5OS02LjY5NC05LjEwOS00LjY0Ny0yOC40NDgtMTIuNDQ0LTU1LjY0NS0xMi40NDRzLTQ2LjUzNiA3Ljc5Ni01NS42NDUgMTIuNDQ0Yy0yLjUxNiAxLjI4NC00LjA5OSAzLjg2OS00LjA5OSA2LjY5NHYyNi44OTdoLTE3LjYzOHYtMzYuMTQ3YzAtMi43MzMgMS4yOTctNS4zNTUgMy40NzMtNy4wMTMuMjg5LS4yMjEgNy4yMjQtNS40NTggMTkuODI4LTEwLjUyNCAxNi4yNjItNi41MzUgMzQuOTYzLTkuOTg5IDU0LjA4MS05Ljk4OSAzLjE5MyAwIDYuNDI5LjA5OCA5LjYxOC4yOTMgNC4xNDQuMjUzIDcuNzA2LTIuOTAyIDcuOTU4LTcuMDQ0cy0yLjkwMS03LjcwNS03LjA0NC03Ljk1OGMtMy40OTItLjIxMi03LjAzNi0uMzItMTAuNTMyLS4zMi0yMS4wMiAwLTQxLjY1OSAzLjgyOS01OS42ODYgMTEuMDczLTEzLjkzMyA1LjYtMjEuODg1IDExLjQxLTIzLjMzOCAxMi41MTgtNS44NzggNC40ODItOS4zODcgMTEuNTcxLTkuMzg3IDE4Ljk2M3YzNi4xNDdoLTEyNC44ODFjLTIxLjM0MyAwLTM4LjcwNiAxNy4zNjMtMzguNzA2IDM4LjcwNXYxMDUuMTc1YzAgMTEuMDcgNC42NjcgMjEuNDYxIDEyLjg1OCAyOC44MDN2MTU5LjYxOGMwIDIxLjM0MiAxNy4zNjMgMzguNzA1IDM4LjcwNSAzOC43MDVoMjk2LjkxMmM0LjE1MSAwIDcuNTE1LTMuMzY1IDcuNTE1LTcuNTE1cy0zLjM2NC03LjUxNS03LjUxNS03LjUxNWgtMjk2LjkxMWMtMTMuMDU1IDAtMjMuNjc2LTEwLjYyMS0yMy42NzYtMjMuNjc2di0xNDguNDQzYzEwLjg5MSA3LjIwOSAyNS43MTYgMTUuNDcgNDUuMTQzIDIzLjI3NCAzLjg0OCAxLjU0NSA4LjIyNy0uMzIgOS43NzUtNC4xNzIgMS41NDctMy44NTEtLjMyMi04LjIyNy00LjE3Mi05Ljc3NC0yNy41MjMtMTEuMDU1LTQ1LjAzLTIyLjkyNS01NC44Ny0zMC45MzctNS41NTEtNC41MTgtOC43MzQtMTEuMjEzLTguNzM0LTE4LjM2N3YtMTA1LjE3NmMwLTEzLjA1NSAxMC42MjEtMjMuNjc2IDIzLjY3Ni0yMy42NzZoNDM0LjU4OWMxMy4wNTUgMCAyMy42NzYgMTAuNjIxIDIzLjY3NiAyMy42NzZ2MTA1LjE3NWMwIDcuMTU0LTMuMTgzIDEzLjg0OS04LjczNCAxOC4zNjctMTEuMjM3IDkuMTQ4LTMxLjQ0NCAyMi41NDEtNjMuOSAzNC4zOTctMzcuMzEgMTMuNjI4LTgxLjU2MSAyMS44NjgtMTMxLjYwOSAyNC41NDF2LTE3LjE1OWMwLTkuODc3LTguMDM1LTE3LjkxMi0xNy45MTEtMTcuOTEyaC0zNy42NGMtOS44NzcgMC0xNy45MTIgOC4wMzUtMTcuOTEyIDE3LjkxMnYxNy4xN2MtNDAuNDYyLTIuMTY1LTc3LjMyNi04LjAwOS0xMDkuNjc3LTE3LjM5Ni0zLjk4Mi0xLjE1My04LjE1NCAxLjEzNy05LjMxMSA1LjEyM3MxLjEzNyA4LjE1NCA1LjEyMyA5LjMxMWMzMy42NjUgOS43NjggNzEuOTQzIDE1LjgxNSAxMTMuODY1IDE4LjAwN3YzLjUzNGMwIDIwLjI1NCAxNi40NzggMzYuNzMxIDM2LjczMiAzNi43MzEgMjAuMjUzIDAgMzYuNzMxLTE2LjQ3NyAzNi43MzEtMzYuNzMxdi0zLjUzMWMxMDEuNjE4LTUuMjkzIDE2MC40MzMtMzEuNzc2IDE5MS4zODQtNTIuMzU3djE0OC40MTRjMCAxMy4wNTUtMTAuNjIxIDIzLjY3Ni0yMy42NzYgMjMuNjc2aC04MS45MDJjLTQuMTUxIDAtNy41MTUgMy4zNjUtNy41MTUgNy41MTVzMy4zNjQgNy41MTUgNy41MTUgNy41MTVoODEuOTAyYzIxLjM0MiAwIDM4LjcwNS0xNy4zNjMgMzguNzA1LTM4LjcwNXYtMTU5LjYxOWM4LjE5Mi03LjM0MiAxMi44NTgtMTcuNzMzIDEyLjg1OC0yOC44MDJ2LTEwNS4xNzZjLjAwMS0yMS4zNDItMTcuMzYyLTM4LjcwNS0zOC43MDUtMzguNzA1em0tMjYyLjAxMS0yMi4xNDZjOC45NjEtMy45NDkgMjQuMjI2LTguODU5IDQ0LjcxNC04Ljg1OXMzNS43NTMgNC45MSA0NC43MTQgOC44NTl2MjIuMTQ2aC04OS40Mjl2LTIyLjE0NnptNjYuNDE2IDI2MS45MjJjMCAxMS45NjctOS43MzUgMjEuNzAyLTIxLjcwMiAyMS43MDJzLTIxLjcwMy05LjczNS0yMS43MDMtMjEuNzAydi0zNS43NWMwLTEuNTkgMS4yOTQtMi44ODMgMi44ODMtMi44ODNoMzcuNjRjMS41ODkgMCAyLjg4MiAxLjI5MyAyLjg4MiAyLjg4M3oiLz48L2c+PC9zdmc+" />
        {'\u00A0'}
        Portafolio
    </a>
    <div className="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="#">
        Home
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="#">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://github.com/Maynor2000" target="_blank" rel="noopener">
            Mi github
          </a>
          <a className="navbar-item" href="https://www.facebook.com/mayk.akopii.7/" target="_blank" rel="noopener">
            Facebook
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <button className="bd-tw-button button" title="proximamente">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                MS Desing Company
              </span>
            </button>
          </p>
          <p className="control" style={{width:"40%"}}>
            <a style={{width:"100%"}} className="button button is-warning is-focused" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Descargar C.V</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>   
    )
}
export default NavBar;