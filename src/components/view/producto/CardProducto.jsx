import React from "react";
import { Col ,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({arregloReceta}) => {
  return (
    <Col md={3}>
      <Card >
        <Card.Img variant="top" src={arregloReceta.imagen} style={{ height: "300px" }}/>
        <Card.Body>
          <Card.Title>{arregloReceta.nombreReceta}</Card.Title>
           <h6>Categoria : {arregloReceta.categoria}</h6>
          <Button variant="warning" as={Link} to={`/detalle/${arregloReceta.id}`}>ver detalle...</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
