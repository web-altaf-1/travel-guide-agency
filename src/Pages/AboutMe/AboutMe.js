import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='about-me-container container'>
            <div className="row">
                <div className="col-xs-12">
                <h1 className='text-primary fw-bold text-center '>About Me</h1>
                    <div className="card about-card-style">
                        <div className='card-block'> 
                            <div className="row">
                                <div className='col-md-4'>
                                    <p>
                                        <img className='w-100' src="https://i.ibb.co/7S8k1y7/Annotation-2022-04-06-235400.png" alt="" />
                                    </p>
                                </div>
                                <div className="col-md-8 ">
                                    <div className='about-right-page'>
                                        <h2>Name : Md Altaf Hossen</h2>
                                        <p> <span className='fw-bold'>Goal</span> : I will became a professional web developer . And i already started my journey in programming sector by Programming Hero , And i will be a good programmer in future world .  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;