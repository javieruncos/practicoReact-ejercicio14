import React from "react";
import { Col, Card } from "react-bootstrap";
import "../producto/detallel.css"

const CardDetalle = ({ receta }) => {
  return (
    <>
    <Col md={12} lg={12}>
      <Card >
        <div className="d-flex card-detalle">
        <div className="w-100">
        <Card.Img variant="top" src={receta.imagen} style={{"height":300}} />
        </div>
        <div>
        <Card.Body>
          <Card.Title>{receta.nombreReceta}</Card.Title>
          <h5>Ingredientes</h5>
          <Card.Text>
           {receta.ingredientes}
          </Card.Text>
          <p>Categoria: {receta.categoria}</p>
        </Card.Body>
        </div>
        </div>
      </Card>
    </Col>
      
    
    </>
  );
};

export default CardDetalle;
