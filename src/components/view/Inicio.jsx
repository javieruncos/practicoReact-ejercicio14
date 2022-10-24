import React, { useEffect,useState } from 'react';
import { Container,Row } from 'react-bootstrap';
import { consultarApi } from '../../helper/queries';
import CardProducto from './producto/CardProducto';

const Inicio = () => {

   const [arregloReceta, setarregloReceta] = useState([])



    useEffect(()=>{
       consultarApi().then((respuesta)=>{
        setarregloReceta(respuesta)
       })
    },[])





    return (
        <Container className='mainSection my-5'>
            <div className='my-5 text-center'>
            <h1>Todo Recetas</h1>
            </div>
            <div>
                <Row>
                   {
                    arregloReceta.map((item)=> <CardProducto arregloReceta={item} key={item.id}></CardProducto>)
                   }
                </Row>
            </div>
        </Container>
    );
};

export default Inicio;