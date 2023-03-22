import React from "react";
import pdf from '../../assets/data/CV.pdf'
import Title from '../../components/title/title.jsx'
import Subtitle from '../../components/subtitle/subtitle.jsx'
import Item from '../../components/item/item.jsx'
import './_about.sass'

const About = () => {
    return(    
        <section className="about" id="about">
        <Title>Sobre mi</Title>
        <div className="about__sections">
            <div className="about__description">                
                <Subtitle>¿Quién soy yo?</Subtitle>
                <Subtitle>Soy Jaime Benitez, desarrollador Front End</Subtitle>
                <div className="about__text--container">
                <p className="about__text">Soy un desarrollador web al que le encanta trabajar en equipo y conocer nuevas personas, siempre con el objetivo en 
                mente de seguir aprendiendo cada dia algo nuevo y dar lo mejor de mi para convertirme en un mejor profesional. </p>
                </div>
                <button className="button"><a className="button--text" href={pdf} target="_blank" rel="noopener noreferrer" download="CV.pdf">Descarga mi CV</a></button>
            </div>
            <div className="about__languages">
                <Subtitle>Idiomas</Subtitle>
                <ul className="languages">
                    <Item isGit={false} source={require("../../assets/img/spain.svg").default} alt="español" description="Español - Nativo" />
                    <Item isGit={false} source={require("../../assets/img/uk.svg").default} alt="inglés" description="Inglés - Avanzado(B2)" />
                    <Item isGit={false} source={require("../../assets/img/germany.svg").default} alt="alemán" description="Alemán - Medio(B1)" />
                    <Item isGit={false} source={require("../../assets/img/france.svg").default} alt="francés" description="Francés - Básico(A2)" />                    
                </ul>
            </div>
        </div>
        </section>
    )
}

export default About