import React from "react";
import { Col, Card } from "react-bootstrap";
import "../producto/detallel.css"

const CardDetalle = ({ receta }) => {
  return (
    <Col md={12}>
      <Card >
        <div className="d-flex card-detalle">
        <div className="w-100">
        <Card.Img variant="top" src={receta.imagen} />
        </div>
        <div>
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <Card.Text>
           {receta.ingredientes}
          </Card.Text>
          <p>categoria: {receta.categoria}</p>
        </Card.Body>
        </div>
        </div>
      </Card>
    </Col>
  );
};

export default CardDetalle;
