import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoApi, consultarApi } from "../../../helper/queries";

const ItemProducto = ({ arregloRecetas, setArregloRecetas }) => {
  const borrarReceta = () => {
    borrarProductoApi(arregloRecetas.id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "producto elimininado",
          "el producto se elimino exitosamente",
          "success"
        );
        consultarApi().then((respuesta) => {
          setArregloRecetas(respuesta);
        });
      } else {
        Swal.fire("error", "al fallo intente nuevamente", "error");
      }
    });
  };

  return (
    <>
      <tr>
        <td>{arregloRecetas.id}</td>
        <td>{arregloRecetas.nombreReceta}</td>
        <td>{arregloRecetas.imagen}</td>
        <td>{arregloRecetas.categoria}</td>
        <td>
          <Button
            className="mx-1"
            as={Link}
            to={`/administrador/editar/${arregloRecetas.id}`}
          >
            editar
          </Button>
          <Button onClick={borrarReceta}>borrar</Button>
        </td>
      </tr>
    </>
  );
};

export default ItemProducto;
