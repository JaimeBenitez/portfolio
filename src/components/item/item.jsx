import React from 'react';
import './_item.sass'

const Item = ({ isGit, source, alt, description }) => {
return(
    <li className="item">
        <img className={isGit ? "icon git": "icon"} src={source} alt={alt}/>
        <p className="description">{description}</p>
    </li>
    )
}

export default Item