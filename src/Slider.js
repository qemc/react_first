import React from "react";
import './Slider.css'
import { useState, useEffect } from "react";

const Slider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrow = () => {
        
        if(currentIndex > 0){
            setCurrentIndex(currentIndex - 1);
        }
        if(currentIndex === 0){
            setCurrentIndex(4);
        }
    }

    const handleRightArrow = () => {
        
        if(currentIndex < 4 && currentIndex !== 4){
            setCurrentIndex(currentIndex + 1 );
        }
        if(currentIndex === 4){
            setCurrentIndex(0);
        }
    }

    

    const handleDotClick = (e) =>{
        const currentObj = e.target;
        setCurrentIndex(currentObj.getAttribute('value'))

        console.log(`url(${slides[currentIndex].url})`)
    }
    
    const sliderStyle = {
        height: '100%',
        position: 'relative',
        
    }
    const slideStyles = {
        transition: '0.4s',
        height:'100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
        margin: '0 auto',
        backgroundColor:'green',
        backgroundImage: `url(${slides[currentIndex].url})`,
    }



    // useEffect(()=>{

    //     console.log('dziala')


    // }, [currentIndex])

    
    return ( 
        <div style={sliderStyle}>
            <div className="arrow-container">
                <div onClick={handleLeftArrow} className="left arrow"></div>
                <div className="dots">
                    {slides.map((slide, slideIndex)=>(
                        <div key={slideIndex} onClick={()=>setCurrentIndex(slideIndex)} className="dot"></div>
                    ))}
                </div>
                <div onClick={handleRightArrow} className="right arrow"></div>
            </div>
            <div style={slideStyles}>
            </div>
        </div>
        
     );
}

export default Slider;