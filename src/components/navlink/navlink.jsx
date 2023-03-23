import React from "react";
import './_navlink.sass'

const Navlink = ( props ) =>{
    return(
        <li className='nav__li'><a href={props.href} className='navlink'>{ props.children }</a></li>
    )
}

export default Navlink;