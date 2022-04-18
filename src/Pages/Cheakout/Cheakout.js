import React from 'react';
import './Cheakout.css';

const Cheakout = () => {
    return (
        <div className='w-75 mx-auto shadow-lg p-5'>
            <form className='' >
                <input className='w-50 mb-2 mx-auto d-block px-2' type="text"  placeholder='Enter Your Name'/> <br />
                <input className='w-50 mb-2 mx-auto d-block px-2' type="text" placeholder='Enter Your Address' /> <br />
                <input className='w-50 mb-2 mx-auto d-block px-2' type="number" name="" id="" placeholder='Enter your Phone Number ' /> <br />
                <input className='w-25 mb-2 mx-auto d-block  p-3'  type="submit" value="Go For Payment" />
            </form>
        </div>
    );
};
export default Cheakout;