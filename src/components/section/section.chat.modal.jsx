import React,{useRef,useState}from 'react';
import emailjs from 'emailjs-com';
const SectionChatmodal = ()=>{
    const [enviado,setEnviado] = useState()
    const nombre = useRef ()
    const apellido = useRef ()
    const email = useRef ()
    const NombreEmpresa = useRef ()
    const mensaje = useRef ()
    const notificacion = useRef ()
    const handleMails = (e)=>{
        e.preventDefault();

    //if(!nombre.current.value||!apellido.current.value||!email.current.value)return
 
        emailjs.sendForm('service_31tzauq', 'template_57zt61d', e.target, 'user_nLBM9GNP5NB5NVITWMwTq')
        .then((result) => {
          setEnviado(true)
          notificacion.current.style.display="inline-block"
          console.log(result.text)
        }, (error) => {
            setEnviado(false)
            console.log(error.text)
            notificacion.current.style.display="inline-block"
        });
        nombre.current.value=""
        apellido.current.value=""
        email.current.value=""
        NombreEmpresa.current.value=""
        mensaje.current.value=""
  }
    return(
        <div className="content" 
        style={{marginTop:"20px",width:"60%",margin:"auto",background:"#80DEEA ",padding:"4%",borderRadius:"2%",border:"2px solid"}}>
            <form onSubmit={handleMails}>
            <div className="field" >
               
                <div className="control">
                <label className="label" style={{display:"inline"}}>Nombre</label> 
                <input ref={nombre} required className="input" id="n"  type="text" placeholder="Nombre..." name="Nombre"  autoComplete="off" required/>
                </div>
            </div>
            <div className="field">
                <label className="label">Apellido</label>
                <div className="control ">
                    <input ref={apellido} required className="input" type="text" placeholder="Apellido..." name="Apellido"  autoComplete="off"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Nombre de la Empresa</label>
                <div className="control ">
                    <input ref={NombreEmpresa} required className="input" type="text" placeholder="Nombre de la empresa..." name="NombreEmpresa"  autoComplete="off"/>
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                    <input ref={email} required className="input" type="email" placeholder="Email..." name="Email"  autoComplete="off"/>
                    <span className="icon is-small is-left">
                        <img src="https://img.icons8.com/metro/26/000000/email.png"style={{opacity:".4"}}/>
                    </span>
                </div>
            </div>
            <div className="field">
                <label className="label">Mensaje</label>
                <div className="control">
                    <textarea ref={mensaje} className="textarea" placeholder="Textarea" name="mensaje"></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <input type="submit" className="button is-link" />
                </div>
                {enviado?<span style={{display:"none"}} ref={notificacion} class="tag is-success">Enviado</span>
                :<span style={{display:"none"}} ref={notificacion} class="tag is-danger">{console.log(enviado)}No Enviado</span>}
            </div>
            
            </form>
        </div>
    )
}
export default SectionChatmodal;