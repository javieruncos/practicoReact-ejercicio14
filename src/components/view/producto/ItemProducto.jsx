import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoApi, consultarApi } from "../../../helper/queries";
import "./item.css"

const ItemProducto = ({ arregloRecetas, setArregloRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "Estas seguro que quieres eliminar esta receta?",
      text: "No podras revertir esta paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoApi(arregloRecetas._id).then((respuesta) => {
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

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <tr>
        <td>{arregloRecetas._id}</td>
        <td>{arregloRecetas.nombreReceta}</td>
        <td><img src={arregloRecetas.imagen} alt="imagen" style={{"width":100}}/></td>
        <td>{arregloRecetas.categoria}</td>
        <td>
          <Button
            className="mx-1"
            as={Link}
            to={`/administrador/editar/${arregloRecetas._id}`}
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
