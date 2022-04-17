import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='service shadow-lg mb-5'>
            <img className='w-100' src={img} alt="" />
            <div style={{height:'270px'}}>
                <h3 className='service-name'>{name}</h3>
                <h5>Price: ${price}</h5>
                <p className=''><small> {description}</small></p>
            </div>
            <button className='btn btn-primary mt-3'>Book Now</button>
        </div>
    );
};

export default Service;