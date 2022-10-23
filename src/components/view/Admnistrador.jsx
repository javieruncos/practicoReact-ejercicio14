import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { consultarApi } from "../../helper/queries";
import { Link } from "react-router-dom";
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
      <div className="d-flex justify-content-around text-center my-5">
        <div className="text-center">
          <h1>Administrador de Recetas</h1>
        </div>
        <div className="mt-2">
          <Button as={Link} to={"/crearProducto"}>
            Agregar
          </Button>
        </div>
      </div>

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
            {arregloRecetas.map((item) => (
              <ItemProducto arregloRecetas={item}></ItemProducto>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Admnistrador;
<h1>pagina administrador</h1>;
