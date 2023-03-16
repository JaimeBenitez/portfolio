import React from 'react'

export default function navbar(){

    return(
        <header>
            <nav className='navbar'>
                <div className='logo-container'><img className='logo' src={require("../assets/img/logo.png")} alt="logo"/></div>
                <ul className='links'>
                    <li className='nav__li'><a href='#home' className='navlink'>INICIO</a></li>
                    <li className='nav__li'><a href='#about' className='navlink'>SOBRE MI</a></li>
                    <li className='nav__li'><a href='#' className='navlink'>TECNOLOGÍAS</a></li>
                    <li className='nav__li'><a href='#' className='navlink'>PROYECTOS</a></li>
                    <li className='nav__li'><a href='#' className='navlink'>CONTACTO</a></li>
                </ul>                
            </nav>
        </header>
    )
}