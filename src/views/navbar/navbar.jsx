import React from 'react'
import Navlink from '../../components/navlink/navlink'
import './_navbar.sass'

const Navbar = () =>{

    return(
        <header>
            <nav className='navbar'>
                <div className='logo-container'><img className='logo' src={require("../../assets/img/logo.png")} alt="logo"/></div>
                <ul className='navlinks'>
                    <Navlink href='#home'>INICIO</Navlink>
                    <Navlink href='#about'>SOBRE MI</Navlink>
                    <Navlink href='#technologies'>TECNOLOGÍAS</Navlink>
                    <Navlink href='#projects'>PROYECTOS</Navlink>
                    <Navlink href='#contact'>CONTACTO</Navlink>
                </ul>                
            </nav>
        </header>
    )
}

export default Navbar