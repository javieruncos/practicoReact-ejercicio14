import React from "react";
import { Col ,Card,Button } from "react-bootstrap";

const CardProducto = ({arregloReceta}) => {
  return (
    <Col md={3}>
      <Card >
        <Card.Img variant="top" src={arregloReceta.imagen} style={{ height: "300px" }}/>
        <Card.Body>
          <Card.Title>{arregloReceta.nombreReceta}</Card.Title>
           <h6>Categoria : {arregloReceta.categoria}</h6>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
