import React from 'react';
import './Trending.css';

function Trending() {
    return (
        <div className="trending">
            <h3>Trending Now</h3>
            <div className="trending__container">
                <div className="trending__item first">
                    <div className="trend">
                        <p>The New One Top Collection</p>
                        <button className="trend__btn">Shop</button>
                    </div>
                </div>
                <div className="trending__item second">
                    <div className="trend">
                        <p>Must-Have Matching Sets</p>
                        <button className="trend__btn">Shop</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending
