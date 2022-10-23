import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { consultarApi, obtenerRecetaApi } from '../../../helper/queries';
import CardDetalle from './CardDetalle';

const DetalleProducto = () => {

       const [arregloReceta, setArregloReceta] = useState([])


       const {id} = useParams()

       useEffect(()=>{
           obtenerRecetaApi(id).then((respuesta)=>{
            if(respuesta.status === 200){
                setArregloReceta(respuesta.dato)
            }else{
                console.log("error")
            }
           })
       },[])

    return (
        <Container className='mainSection'>
            <div>
                <h1>receta</h1>            
            </div>
            <div>
                <Row>
                <CardDetalle receta={arregloReceta}></CardDetalle>
                </Row>
            </div>
        </Container>
    );
};

export default DetalleProducto;