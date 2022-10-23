import React from 'react';
import { Button } from 'react-bootstrap';

const ItemProducto = ({arregloRecetas}) => {
    return (
        <>
         <tr>
            <td>{arregloRecetas.id}</td>
            <td>{arregloRecetas.nombreReceta}</td>
            <td>{arregloRecetas.imagen}</td>
            <td>{arregloRecetas.categoria}</td>
            <td><Button className='mx-1'>editar</Button><Button>borrar</Button></td>
          </tr>
        </>
    );
};

export default ItemProducto;