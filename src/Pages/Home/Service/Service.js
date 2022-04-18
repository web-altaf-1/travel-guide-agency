import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const {id, name, img, price, description } = service;
    const navigateToCheakoutPage = () =>{
        navigate(`/cheakout`)
    }
    return (
        <div className='service shadow-lg mb-5'>
            <img className='w-100' src={img} alt="" />
            <div style={{height:'320px',padding:"10px"}}>
                <h3 className='service-name'>{name}</h3>
                <h5>Price: ${price}</h5>
                <p className='service-desc'><small> {description}</small></p>
            </div>
            <button onClick={()=> navigateToCheakoutPage(id)} className='btn btn-primary mt-3'>Book Now</button>
        </div>
    );
};

export default Service;