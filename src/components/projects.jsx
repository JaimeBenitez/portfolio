import React, {useState} from "react";

export default function Projects(){

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
            <span className="projects__title">Proyectos</span>
            <div className="projects__container">
                <div className="cards">
                    <div className="card">                        
                        <img className="card-img" src={require('../assets/img/digimon-information.png')} onMouseOver={handleDigimonHover}  alt= "digimon-information" />                        
                        <div className={isDigimonActive ? "hover-container show" : "hover-container"}>
                            <span className="card-title">Digimon-information</span>
                            <p className="card-description">Aplicación que nos permite usar la ApiRest de digimon-information para buscar digimons y guardar favoritos</p>
                            <a href="https://voluble-tulumba-b9cf5a.netlify.app/" className="card-link">Visitar</a>
                        </div>
                    </div>
                    <div className="card">                        
                        <img className="card-img" src={require('../assets/img/idle_dev.png')} onMouseOver={handleIdleHover}  alt= "digimon-information" />                        
                        <div className={isIdleActive ? "hover-container show" : "hover-container"} >
                            <span className="card-title">Idle-dev</span>
                            <p className="card-description">Bienvenid@ al mundo tecnológico. Gana dinero comprando tecnologías y expande tu imperio tecnológico en este idle incremental</p>
                            <a href="https://idle-dev.netlify.app/" className="card-link">Visitar</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        
    )
}