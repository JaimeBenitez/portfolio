import React from "react"
import './_technologies.sass'
import Title from '../../components/title/title.jsx'
import Subtitle from '../../components/subtitle/subtitle.jsx'
import Item from '../../components/item/item.jsx'


const Technologies = () => {
    return(
        <section className="technologies" id="technologies">
            <Title>Tecnologías</Title>
            <div className="technologies__container">
                <div className="technologies__item">
                    <Subtitle>Front End</Subtitle>
                    <ul className="techs">
                        <Item isGit={false} source={require("../../assets/img/html.svg").default} alt="html 5" description="HTML 5" />
                        <Item isGit={false} source={require("../../assets/img/css.svg").default} alt="css 3" description="CSS 3" />
                        <Item isGit={false} source={require("../../assets/img/js.svg").default} alt="javascript" description="javascript" />
                        <Item isGit={false} source={require("../../assets/img/react.svg").default} alt="reactJS" description="reactJS" />
                        <Item isGit={false} source={require("../../assets/img/vue.svg").default} alt="vueJS" description="vueJS" />
                    </ul>
                </div>
                <div className="technologies__item">
                    <Subtitle>Back End</Subtitle>
                    <ul className="techs">
                        <Item isGit={false} source={require("../../assets/img/python.svg").default} alt="python" description="Python" />
                        <Item isGit={false} source={require("../../assets/img/laravel.svg").default} alt="laravel" description="Laravel" />
                        <Item isGit={false} source={require("../../assets/img/spring.svg").default} alt="springboot" description="springboot" />
                        <Item isGit={false} source={require("../../assets/img/nodejs.svg").default} alt="node" description="NodeJS" />
                    </ul>
                </div>
                <div className="technologies__item">
                    <Subtitle>Mobile</Subtitle>
                    <ul className="techs">
                        <Item isGit={false} source={require("../../assets/img/kotlin.svg").default} alt="kotlin" description="Kotlin" />                      
                    </ul>
                </div>
                <div className="technologies__item">
                    <Subtitle>Despliegue y versiones</Subtitle>
                    <ul className="techs">
                        <Item isGit={true} source={require("../../assets/img/git.svg").default} alt="git" description="Git" />
                        <Item isGit={false} source={require("../../assets/img/docker.svg").default} alt="docker" description="Docker" />
                        <Item isGit={false} source={require("../../assets/img/netlify.svg").default} alt="netlify" description="Netlify" />                    
                    </ul>
                </div>
                
            </div>
        </section>
    )
}

export default Technologies

