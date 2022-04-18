import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../../images/slider/slider1.png'
import slider2 from '../../../images/slider/slider2.png'
import slider3 from '../../../images/slider/slider3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img 
                    className="d-block w-100 "
                    src={slider1}
                    alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100 "
                    src={slider2}
                    alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;