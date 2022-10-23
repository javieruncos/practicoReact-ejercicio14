import React from "react";
import { Col ,Card,Button } from "react-bootstrap";

const CardProducto = ({arregloReceta}) => {
  return (
    <Col md={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={arregloReceta.imagen} />
        <Card.Body>
          <Card.Title>{arregloReceta.nombreReceta}</Card.Title>
           <h6>Categoria : {arregloReceta.categoria}</h6>
           <ul>
            <li>{arregloReceta.ingrediente1}</li>
            <li>{arregloReceta.ingrediente2}</li>
            <li>{arregloReceta.ingrediente2}</li>
            <li>{arregloReceta.ingrediente3}</li>
            <li>{arregloReceta.ingrediente4}</li>
            <li>{arregloReceta.ingrediente5}</li>
            <li>{arregloReceta.ingrediente6}</li>
            <li>{arregloReceta.ingrediente7}</li>
            <li>{arregloReceta.ingrediente8}</li>
           </ul>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
