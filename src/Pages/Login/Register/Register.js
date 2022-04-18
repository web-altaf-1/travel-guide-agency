import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SlocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {

    const [loginUser] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();


    if (loading) {
        return <Loading></Loading>
    }



    if (user) {
        signOut(auth);
    }

    if (user) {
        navigate('/login');
    }
    let errorElement;
    

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        

        if (error) {
            errorElement = <p className='text-danger'>Error: {error.message}</p>
        };



        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container w-50 mx-auto shadow-lg p-5 rounded-lg'>
            <div>
                <h2 className='text-center text-primary my-2'>Please Register</h2>
                <Form onSubmit={handleRegister} className=''>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="I agree to Terms and condition" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="signup">
                        <Form.Label>Already Have an Account ?? </Form.Label>
                        <Link style={{ marginLeft: '5px' }} to='/login'>Please Login</Link>
                    </Form.Group>
                    {errorElement}
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            <div>
                <SlocialLogin></SlocialLogin>
            </div>

        </div>
    );
};

export default Register;