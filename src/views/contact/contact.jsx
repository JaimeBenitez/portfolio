import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Title from '../../components/title/title.jsx'
import Subtitle from '../../components/subtitle/subtitle.jsx'
import LinkItem from '../../components/linkItem/linkItem.jsx'
import ErrorMsg from '../../components/errorMsg/errorMsg.jsx'
import './_contact.sass'

const Contact = () =>{
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
        <Title>Contacto</Title>
        <div className="contact__sections">
            <form ref={form} onSubmit={handleSubmit} className="contact__form">
                <Subtitle>Mandame un mensaje...</Subtitle>
                <label htmlFor="user_name">Nombre</label>
                <input type="text" value={username} onChange={handleUserChange} onBlur={handleUserError} name="user_name" 
                  aria-errormessage="usernameError"  aria-invalid={usernameError} />
                <ErrorMsg id="usernameError" condition={usernameError} message="Por favor introduce un nombre" />                   
                <label htmlFor="user_email">Email</label>
                <input type="email" value={email} onChange={handleEmailChange} onBlur={handleEmailError} name="user_email" 
                  aria-errormessage="emailError"  aria-invalid={emailError} />
                <ErrorMsg id="emailError" condition={emailError} message="Por favor introduce un email valido" />               
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" value={message} onChange={handleMessageChange} onBlur={handleMessageError} 
                  aria-errormessage="messageError"  aria-invalid={messageError} />
                <ErrorMsg id="messageError" condition={messageError} message="Por favor introduce al menos 3 palabras" />               
                <input type="submit" className="button" value="Enviar" />
                <ErrorMsg id="messageSent" condition={messageSent} message="Mensaje enviado" />
                <ErrorMsg id="sentError" condition={sentError} message="Error al enviar el mensaje" />                
            </form>
            <div className="contact__links">
                <Subtitle>... o puedes encontrarme en estas plataformas</Subtitle>
                <ul className="links">                    
                    <LinkItem href="mailto:jbenaci50@gmail.com?Subject=Me%20interesa%20tu%20CV" source={require("../../assets/img/email.svg").default} alt="email" description="Email" />
                    <LinkItem href="https://www.linkedin.com/in/jaime-benitez-acien/" source={require("../../assets/img/linkedin.svg").default} alt="linkedin" description="Linkedin" />
                    <LinkItem href="https://github.com/JaimeBenitez" source={require("../../assets/img/github.svg").default} alt="github" description="Github" />                                       
                </ul>
            </div>
        </div>
    </section>
  );
};

export default Contact