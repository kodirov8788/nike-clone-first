import React from 'react'
import { Link } from "react-router-dom";
import "./Extendnav.css"

function Extendnav({ item, route, router, header }) {
    return (
        <div>
            <Link to={router}>
                <h2>{header}</h2>
            </Link>
            <Link to={route}>
                <p>{item}</p>
            </Link>
        </div>
    )
}

export default Extendnav
