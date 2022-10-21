import React from 'react';
import { Container,Row } from 'react-bootstrap';
import CardProducto from './producto/CardProducto';

const Inicio = () => {
    return (
        <Container className='mainSection'>
            <div className='my-5 text-center'>
            <h1>Todo Recetas</h1>
            </div>
            <div>
                <Row>
                    <CardProducto></CardProducto>
                </Row>
            </div>
        </Container>
    );
};

export default Inicio;