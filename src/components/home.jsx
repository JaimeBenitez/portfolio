import React from "react";

export default function Home(){
    return(
        <section className="home" id="home">             
            <img className="image-cv" src={require('../assets/img/Foto-cv.png')} alt="mi foto" />
            <div className="text-container">  
                <p>¡Buenas!</p>
                <p><strong>Soy Jaime Benitez</strong></p>
                <p>Desarrollador Front End</p>
            </div> 
        </section>
    )
}