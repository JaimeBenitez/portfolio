import React from 'react'
import './_navbar.sass'

const Navbar = () =>{

    return(
        <header>
            <nav className='navbar'>
                <div className='logo-container'><img className='logo' src={require("../../assets/img/logo.png")} alt="logo"/></div>
                <ul className='navlinks'>
                    <li className='nav__li'><a href='#home' className='navlink'>INICIO</a></li>
                    <li className='nav__li'><a href='#about' className='navlink'>SOBRE MI</a></li>
                    <li className='nav__li'><a href='#technologies' className='navlink'>TECNOLOGÍAS</a></li>
                    <li className='nav__li'><a href='#projects' className='navlink'>PROYECTOS</a></li>
                    <li className='nav__li'><a href='#contact' className='navlink'>CONTACTO</a></li>
                </ul>                
            </nav>
        </header>
    )
}

export default Navbar