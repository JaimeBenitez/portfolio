import React, {useState, useRef, useEffect} from "react";
import './_projects.sass'
import Title from '../../components/title/title.jsx'

const Projects = () =>{

    const myRef = useRef()

    const [isVisible, setIsVisible] = useState()    

    useEffect(() => { 
        const observer = new IntersectionObserver((entries) =>{
            const entry = entries[0]
            setIsVisible(entry.isIntersecting)
            
        })
        observer.observe(myRef.current)
      }, [])

    const [isDigimonActive, setDigimonActive] = useState(false);
    const [isIdleActive, setIdleActive] = useState(false);

    const handleDigimonHover = () => {        
        setDigimonActive(!isDigimonActive);
    }
    
    const handleIdleHover = () => {        
        setIdleActive(!isIdleActive);
    }

    return(
        <section className="projects" id="projects">
            <Title>Proyectos</Title>
            <div className="projects__container">
                <div className="cards">
                    <div ref={myRef} className={isVisible ? "card show" : "card hidden-right"}>                        
                        <img className="card-img" src={require('../../assets/img/digimon-information.png')} onMouseOver={handleDigimonHover}   alt= "digimon-information" />                        
                        <div className={isDigimonActive ? "hover-container show-description" : "hover-container"} >
                            <span className="card-title">Digimon-information</span>
                            <p className="card-description">Aplicación que nos permite usar la ApiRest de digimon-information para buscar digimons y guardar favoritos</p>
                            <a href="https://voluble-tulumba-b9cf5a.netlify.app/" className="card-link" target="_blank" rel="noreferrer">Visitar</a>
                    </div>
                    </div>
                    <div ref={myRef} className={isVisible ? "card show" : "card hidden-left"}>                        
                        <img className="card-img" src={require('../../assets/img/idle_dev.png')} onMouseOver={handleIdleHover}  alt= "digimon-information" />                        
                        <div className={isIdleActive ? "hover-container show-description" : "hover-container"} >
                            <span className="card-title">Idle-dev</span>
                            <p className="card-description">Bienvenid@ al mundo tecnológico. Gana dinero comprando tecnologías y expande tu imperio tecnológico en este idle incremental</p>
                            <a href="https://idle-dev.netlify.app/" className="card-link" target="_blank" rel="noreferrer">Visitar</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}

export default Projects