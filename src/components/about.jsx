import React from "react";
import pdf from '../assets/data/CV.pdf'

export default function About(){
    return(
        <section className="about" id="about">
        <span className="about__title">Sobre mi</span>
        <div className="about__sections">
            <div className="about__description">                
                <span className="about__subtitle">¿Quién soy yo?</span>
                <span className="about__subtitle">Soy Jaime Benitez, desarrollador Front End</span>
                <div className="about__text--container">
                <p className="about__text">Soy un desarrollador web al que le encanta trabajar en equipo y conocer nuevas personas, siempre con el objetivo en 
                mente de seguir aprendiendo cada dia algo nuevo y dar lo mejor de mi para convertirme en un mejor profesional. </p>
                </div>
                <button className="button"><a className="button--text" href={pdf} target="_blank" rel="noopener noreferrer" download="CV.pdf">Descarga mi CV</a></button>
            </div>
            <div className="about__languages">
                <span className="about__subtitle">Idiomas</span>
                <ul className="languages">
                    <li className="language">
                        <img className="flag" src={require("../assets/img/spain.svg").default} alt="español"/>
                        <p className="language__description">Español - Nativo</p>
                    </li>
                    <li className="language">
                        <img className="flag" src={require("../assets/img/uk.svg").default} alt="inglés"/>
                        <p className="language__description">Inglés - Avanzado(B2)</p>
                    </li>
                    <li className="language">
                        <img className="flag" src={require("../assets/img/germany.svg").default} alt="alemán"/>
                        <p className="language__description">Alemán - Medio(B1)</p>
                    </li>
                    <li className="language">
                        <img className="flag" src={require("../assets/img/france.svg").default} alt="francés"/>
                        <p className="language__description">Francés - Básico(A2)</p>
                    </li>
                </ul>
            </div>
        </div>
        </section>
    )
}