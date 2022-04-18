import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending ] = useSendPasswordResetEmail(
        auth
      );

    if(loading){
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p> 
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    // const navigateRegister = event => {
    //     navigate('/register');
    // }

    const resetPassword = async()=>{
        const email = emailRef.current.value;
       await sendPasswordResetEmail(email);
       toast('Email send');
    }



    return (
        <div className='container w-50 mx-auto shadow-lg p-5 rounded-lg mt-5'>
            <h2 className='text-center text-primary mb-2'>Please login !!</h2>
            <Form onSubmit={handleSubmit} className=''>
                <label htmlFor="Email Address"></label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="signup">
                <Form.Label>New to travel guide agency ?? </Form.Label>
                    <Link style={{marginLeft:'5px'}} to='/register'>Please Register</Link>
                    <br />
                <Form.Label>Forget Password ?? </Form.Label>
                    <Link onClick={resetPassword} style={{marginLeft:'5px'}} to='/login'>Reset Password</Link>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login