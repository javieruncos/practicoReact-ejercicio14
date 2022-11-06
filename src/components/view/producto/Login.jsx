import React from 'react';
import { Container } from 'react-bootstrap';
import "../producto/Login.css"

const Login = () => {
    return (
        <Container className=' mainSection my-5'>
            <div className='my-5  mx-auto divForm'>
                <h1 className='text-center'>Login</h1>
              <form className='mt-5 w-100 mx-auto shadow py-5 px-5'>
                <label>Usuario</label>
                <input type="email" className='form-control my-3' />
                <label>Email</label>
                <input type="password" className='form-control' />
                <button className='btn btn-primary mt-4'>Enviar</button>
              </form>
            </div>
        </Container>
    );
};

export default Login;