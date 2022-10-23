import React, { useEffect } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import { editarRecetaApi, obtenerRecetaApi } from '../../../helper/queries';

const EditarProducto = () => {

      const {id}= useParams()

      const navegacion = useNavigate()



    const {
        register,
        handleSubmit,
        formState: { errors },setValue
      } = useForm();



      useEffect(()=>{ 
           obtenerRecetaApi(id).then((respuesta)=>{
               if(respuesta.status === 200){
                setValue("nombreReceta",respuesta.dato.nombreReceta)
                setValue("imagen",respuesta.dato.imagen)
                setValue("ingredientes",respuesta.dato.ingredientes)
                setValue("categoria",respuesta.dato.categoria)
               }
           })
      },[])
    
      const onSubmit = (data) => {
         editarRecetaApi(id,data).then((respuesta)=>{
            if(respuesta.status === 200){
                Swal.fire("se edito correctamente","la receta se edito exitosamente","success")
                navegacion("/administrador")
            }else{
                Swal.fire("error","no se pudo editar intente nuevamente","error")
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

export default EditarProducto;