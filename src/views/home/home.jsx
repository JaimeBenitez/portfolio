import React from "react";
import './_home.sass'

const Home = () => {
    return(
        <section className="home" id="home">             
            <img className="image-cv" src={require('../../assets/img/Foto-cv.png')} alt="mi foto" />
            <div className="text-container">  
                <p>¡Buenas!</p>
                <p><strong>Soy Jaime Benitez</strong></p>
                <p>Desarrollador Front End</p>
            </div> 
        </section>
    )
}

export default Home