import React from 'react';
import { Container } from 'react-bootstrap';

const Login = () => {
    return (
        <Container>
            <div className='w-75 mx-auto'>
                <form>
                    <label placeholder='Usuario'></label>
                    <input type="email" />
                    <label placeholder='Email'></label>
                    <input type="password" />
                </form>
            </div>
        </Container>
    );
};

export default Login;