import React from "react";
import pdf from '../assets/data/CV.pdf'

export default function about(){
    return(
        <section className="about" id="about">
            <span className="about__title">Sobre mi</span>
            <span className="about__subtitle">¿Quién soy yo?</span>
            <span className="about__subtitle">Soy Jaime Benitez, desarrollador Front End</span>
            <div className="about__text--container">
            <p className="about__text">Soy un desarrollador web al que le encanta trabajar en equipo y conocer nuevas personas, siempre con el objetivo en 
            mente de seguir aprendiendo cada dia algo nuevo y dar lo mejor de mi para convertirme en un mejor profesional. </p>
            </div>
            <button className="button"><a className="button--text" href={pdf} target="_blank" rel="noopener noreferrer" download="CV.pdf">Descarga mi CV</a></button>
        </section>
    )
}