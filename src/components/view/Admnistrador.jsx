import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { consultarApi } from "../../helper/queries";
import ItemProducto from "./producto/ItemProducto";

const Admnistrador = () => {
  const [arregloRecetas, setArregloRecetas] = useState([]);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      setArregloRecetas(respuesta);
      console.log(respuesta);
    });
  }, []);

  return (
    <Container className="mainSection">
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
             {
                arregloRecetas.map((item)=><ItemProducto arregloRecetas={item}></ItemProducto>)
             }
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Admnistrador;
<h1>pagina administrador</h1>;
