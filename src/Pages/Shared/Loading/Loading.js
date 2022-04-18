import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'350px'}} className='d-flex w-100 justify-content-center align-items-center'> 
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;