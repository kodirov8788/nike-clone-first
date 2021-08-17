import React,{useState} from 'react'
import "./Products.css"

function Products() {
const [active, setActive]=useState(false);
const changeColor
    return (
        <div className="product">
            <div className="box"></div>
            <button onClick={changeColor}>Set active</button>
        </div>
    )
}

export default Products
