import React from "react";

export default function Technologies() {
    return(
        <section className="technologies" id="technologies">
            <span className="technologies__title">Tecnologías</span>
            <div className="technologies__container">
                <div className="technologies__item">
                    <span className="technologies__subtitle">Front End</span>
                    <ul className="techs frontend">
                        <li className="tech ">
                            <img className="icon" src={require("../assets/img/html.svg").default} alt="html 5"/>
                            <p className="tech__description">HTML 5</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/css.svg").default} alt="css 3"/>
                            <p className="language__description">CSS 3</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/js.svg").default} alt="javascript"/>
                            <p className="tech__description">Javascript</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/react.svg").default} alt="reactJS"/>
                            <p className="tech__description">ReactJS</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/vue.svg").default} alt="vueJS"/>
                            <p className="tech__description">VueJS</p>
                        </li>
                    </ul>
                </div>
                <div className="technologies__item">
                    <span className="technologies__subtitle">Back End</span>
                    <ul className="techs backend">
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/python.svg").default} alt="phyton"/>
                            <p className="tech__description">Python</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/laravel.svg").default} alt="laravel"/>
                            <p className="language__description">Laravel</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/spring.svg").default} alt="springboot"/>
                            <p className="tech__description">Springboot</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/nodejs.svg").default} alt="node"/>
                            <p className="tech__description">NodeJS</p>
                        </li>                        
                    </ul>
                </div>
                <div className="technologies__item">
                    <span className="technologies__subtitle">Mobile</span>
                    <ul className="techs">
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/kotlin.svg").default} alt="kotlin"/>
                            <p className="tech__description">Kotlin</p>
                        </li>                        
                    </ul>
                </div>
                <div className="technologies__item">
                    <span className="technologies__subtitle">Despliegue y versiones</span>
                    <ul className="techs">
                        <li className="tech">
                            <img className="icon git" src={require("../assets/img/git.svg").default} alt="git"/>
                            <p className="tech__description">Git</p>
                        </li>
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/docker.svg").default} alt="docker"/>
                            <p className="tech__description">Docker</p>
                        </li>  
                        <li className="tech">
                            <img className="icon" src={require("../assets/img/netlify.svg").default} alt="netlify"/>
                            <p className="tech__description">Netlify</p>
                        </li>                     
                    </ul>
                </div>
                
            </div>
        </section>
    )
}

