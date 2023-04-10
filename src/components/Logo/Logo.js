import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
    <div style={{width: '200px', marginLeft: '20px'}}>
        <Tilt className="Tilt br2 shadow-2">
            <div style={{ height: '200px'}}>
                <div className="pa3">
                    <img style={{paddingTop: '30px'}} alt="Logo" src={brain}/>
                </div>
            </div>
        </Tilt>
    </div>
    )
}

export default Logo