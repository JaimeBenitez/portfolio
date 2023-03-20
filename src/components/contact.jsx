import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(){
  const form = useRef();
  //Comprueba que el email es valido
  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
  //Comprueba que se hayan escrito al menos 3 palabras
  const textAreaRegexp = new RegExp(/^[\w',]+\s[\w',]+\s[\w',]+/gm)

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [usernameError,setUsernameError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [messageError,setMessageError] = useState(false)
  const [messageSent,setMessageSent] = useState(false)
  const [sentError,setSentError] = useState(false)

  function handleUserChange(e){  
    setUsername(e.target.value)
  }
  function handleEmailChange(e){  
    setEmail(e.target.value)
  }
  function handleMessageChange(e){  
    setMessage(e.target.value)
  }
  function handleUserError(){    
    if (username === ""){
      setUsernameError(true)      
    }else{
      setUsernameError(false)
    }
  }
  function handleEmailError(){    
    if (!emailRegexp.test(email) || email === ""){
      setEmailError(true)      
    }else{
      setEmailError(false)
    }
  }
  function handleMessageError(){    
    if (!textAreaRegexp.test(message) || message === ""){
      setMessageError(true)      
    }else{
      setMessageError(false)
    }
  }


  function handleSubmit(e){        
    e.preventDefault();
    //Si todo el formulario es valido entonces el mensaje se envia
    if(!usernameError && !emailError && !messageError){
       sendEmail()          
    }        
}


  //Esta es la función que necesita la libreria para funcionar
  const sendEmail = () => {   

    emailjs.sendForm('service_eifxgyp', 'template_5g050ld', form.current, 'LUxtrFSYPmdgvJjpP')
      .then((result) => {
          console.log(result.text)
          setMessageSent(true)
      }, (error) => {
          console.log(error.text)
          setSentError(true)
      });
  };

  return (
    <section className="contact" id="contact">
        <span className="contact__title">Contacto</span>
        <div className="contact__sections">
            <form ref={form} onSubmit={handleSubmit} className="contact__form">
                <span className="about__subtitle">Mandame un mensaje...</span>
                <label htmlFor="user_name">Nombre</label>
                <input type="text" value={username} onChange={handleUserChange} onBlur={handleUserError} name="user_name" 
                  aria-errormessage="usernameError"  aria-invalid={usernameError} />
                <span className="error" id="usernameError" aria-live="assertive" style={{visibility: usernameError ? "visible" : "hidden"}}>
                    Por favor introduce un nombre</span>
                <label htmlFor="user_email">Email</label>
                <input type="email" value={email} onChange={handleEmailChange} onBlur={handleEmailError} name="user_email" 
                  aria-errormessage="emailError"  aria-invalid={emailError} />
                <span className="error" id="emailError" aria-live="assertive" style={{visibility: emailError ? "visible" : "hidden"}}>
                    Por favor introduce un email valido</span>
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" value={message} onChange={handleMessageChange} onBlur={handleMessageError} 
                  aria-errormessage="messageError"  aria-invalid={messageError} />
                <span className="error" id="messageError" aria-live="assertive" style={{visibility: messageError ? "visible" : "hidden"}}>
                    Por favor introduce al menos 3 palabras</span>
                <input type="submit" className="button" value="Enviar" />
                <span className="error" id="messageSent" aria-live="assertive" style={{visibility: messageSent ? "visible" : "hidden"}}>
                    Mensaje enviado</span>
                <span className="error" id="sentError" aria-live="assertive" style={{visibility: sentError ? "visible" : "hidden"}}>
                    Error al enviar el mensaje</span>
            </form>
            <div className="contact__links">
                <span className="contact__subtitle">... o puedes encontrarme en estas plataformas</span>
                <ul className="links">
                    <li className="link">
                        <a href="mailto:jbenaci50@gmail.com?Subject=Me%20interesa%20tu%20CV"><img className="link__icon" src={require("../assets/img/email.svg").default} alt="email"/></a>
                        <p className="link__description">Email</p>
                    </li>
                    <li className="link">
                        <a href="https://www.linkedin.com/in/jaime-benitez-acien/" target="_blank" rel="noreferrer"><img className="link__icon" src={require("../assets/img/linkedin.svg").default} alt="linkedin"/></a>
                        <p className="link__description">Linkedin</p>
                    </li>
                    <li className="link">
                        <a href="https://github.com/JaimeBenitez" target="_blank" rel="noreferrer"><img className="link__icon" src={require("../assets/img/github.svg").default} alt="github"/></a>
                        <p className="link__description">Github</p>
                    </li>                    
                </ul>
            </div>

        </div>
    </section>
  );
};