import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearProductoApi } from "../../../helper/queries";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();

  const onSubmit = (data) => {
    crearProductoApi(data).then((respuesta)=>{
        if(respuesta.status === 201){
            Swal.fire("la receta fue creada","la receta de creo correctamente","success")
            reset()
        }else{
            Swal.fire("error","intente esta accion mas tarde","error")
        }
    })
  };

  return (
    <Container className="mainSection">
      <div className="my-5">
        <h1>Recetas</h1>
      </div>
      <div className="mb-5">
        <Form className="my-5" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre de la Receta</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre de la Receta"
              {...register("nombreReceta", {
                required: "este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "la cantidad minima de caracteres es de 3",
                },
                maxLength: {
                  value: 200,
                  message: "la cantidad maxima de caracteres es de 200",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://www.coosur.com/uploads/recetasaceiteoliva/croquetas-de-pollo-asado.jpg"
              {...register("imagen", {
                required: "este campo es obligatorio",
                pattern: {
                  value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Lista de Ingredientes</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ejemplo
             *1
             *2
             *3"
             {...register("ingredientes",{
                required:"este campo es obligatorio",
                minLength:{
                    value:50,
                    message:"la cantidad minima de caracteres es de 50"
                },
                maxLength:{
                    value:500,
                    message:"la cantidad maxima de caracteres es de 500"
                }
             })}
              style={{ height: "200px" }}
            />
            <Form.Text className="text-danger">
             {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Preparar</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="modo de preparacion"
             {...register("preparar",{
                required:"este campo es obligatorio",
                minLength:{
                    value:50,
                    message:"la cantidad minima de caracteres es de 50"
                },
                maxLength:{
                    value:2200,
                    message:"la cantidad maxima de caracteres es de 500"
                }
             })}
              style={{ height: "200px" }}
            />
            <Form.Text className="text-danger">
             {errors.preparar?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicEmail">
            <Form.Label>Categoria</Form.Label>
            <Form.Select aria-label="Default select example"
             {...register("categoria",{
                required:"este campo es obligatorio"
             }
             
             )}
            >
              <option value="">Selecciona una categoria</option>
              <option value="Ensaladas">Ensaladas</option>
              <option value="Pollo">Pollo</option>
              <option value="Pastas">Pastas</option>
              <option value="Guisos">Guisos</option>
              <option value="Postres">Postres</option>
            </Form.Select>
            <Form.Text className="text-danger">
             {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CrearProducto;
