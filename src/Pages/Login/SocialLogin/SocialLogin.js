import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorElement;

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    };

    if (user) {
        navigate('/');
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <div style={{ height: '2px', backgroundColor: "LightGray" }} className='w-50'>
                </div>
                <span className='px-3'>or</span>
                <div style={{ height: '2px', backgroundColor: "LightGray" }} className='w-50'>
                </div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={() => signInWithGoogle()} className='google-signin-button'><img height={30} src="https://i.ibb.co/QJ5sk71/google-logo-9824-1-1.png" alt="" /> Sign In with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;