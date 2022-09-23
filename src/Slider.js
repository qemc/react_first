import React from "react";
import './Slider.css'
import { useState } from "react";

const Slider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const sliderStyle = {
        height: '100%',
        position: 'relative',
    }
    const slideStyles = {
        height:'100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        margin: '0 auto',
        backgroundColor:'green',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }
    const leftArrowStyles = {
        position: 'absolute',
        top: '40%',
        fontSize:'50px'
    }
    const rightArrowStyles = {
        position: 'absolute',
        top: '40%',
        left: '99%',
    }

    return ( 
        <div style={sliderStyle}>
            <div style={leftArrowStyles}>❰</div>
            <div style={rightArrowStyles}>❱</div>
            <div style={slideStyles}>
            </div>
        </div>
     );
}

export default Slider;