import React from 'react';
import './MainContent.css';
import adVideo from '../../videos/advideo.mp4'

function MainContent() {
    return (
        <div className="maincontent">
            <h3>Featured: Nike Running</h3>
            <div className="maincontent__video">
                <div className="maincontent__videoInfo">
                    <h1>PROJECT: RUN FEARLESS</h1>
                    <p>Foam meets function for stability and support for miles.</p>
                    <button className="video__calltoact">Explore</button>
                    <button className="video__calltoact">Shop</button>
                </div>
                <video className="maincontent__videoSource" controls autoPlay muted loop src={adVideo}> </video>
                <div className="videoFrame"></div>
            </div>
        </div>
    )
}

export default MainContent
