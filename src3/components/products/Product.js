import React, { useState } from 'react';
import './Product.css'

function Product() {
    const [active, setActive ] = useState(false);
    // const changeBoxActive = (e) => {
    //         const box = document.querySelector('.box');

    //     if(!active){
    //         box.classList.add('activeBox');
    //         setActive(true);
    //     }
    //     else{
    //         box.classList.remove('activeBox');
    //         setActive(false);
    //     }
    // }


    return (
        <div className="product">
            <div className={active ? "box activeBox" : "box"}></div>
            <button onClick={()=>setActive(!active)}>Set active</button>
        </div>
    )
}

export default Product
