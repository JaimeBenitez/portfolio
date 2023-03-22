import React from 'react';
import './_linkItem.sass'

const LinkItem = ({ href, source, alt, description }) => {
return(
    <li className="link__item">
        <a href={href} target="_blank" rel="noreferrer">
            <img className="link__icon" src={source} alt={alt}/>
        </a>
        <p className="link__description">{description}</p>
    </li>
    )
}

export default LinkItem