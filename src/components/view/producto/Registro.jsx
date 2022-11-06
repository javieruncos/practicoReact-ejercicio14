import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { crearUsuario } from "../../../helper/queries";
import Swal from "sweetalert2";

const Registro = ({setUsuario}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dato) => {
   crearUsuario(dato).then((respuesta)=>{
     if(respuesta.status === 201){
       Swal.fire("el usuario se creo correctamente","success")
       localStorage.setItem("usuario",JSON.stringify(dato))
       setUsuario(dato)
    }else{
        Swal.fire("error al crear el usuario ","error")
    }
   })
  };

  return (
    <Container className="mt-5 mainSection">
      <div className="my-5  mx-auto divForm">
        <h1 className="text-center">Registro</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Usuario"
              {...register("NombreUsuario", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "la cantidad minima de caracteres es de 3",
                },
                maxLength: {
                  value: "100",
                  message: "la cantida maxima de caracteres es de 100",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.NombreUsuario?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email"
             placeholder="Enter email"
             {...register("email",{
                required:"El mail es obligatorio",
                pattern:{
                    value:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                    message:"El mail es obligatorio"
                }
              })}
             />
            <Form.Text className="text-danger">
             {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
             type="password" 
             placeholder="Password" 
             {...register("password",{
                required:"El password es obligatorio",
                minLength:{
                    value:8,
                    message:"La cantidad minima de caracteres es de 8"
                },
                maxLength:{
                    value:50,
                    message:"La cantidad maxima de caracteres es de 50"
                }
              })}
             />
               <Form.Text className="text-danger">
             {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* <form className="mt-5 w-100 mx-auto shadow py-5 px-5"
         onSubmit={handleSubmit(onSubmit)}
        >
          <label>Nombre Usuario</label>
          <input
            type="text"
            className="form-control my-3"
            {...register("NombreUsuario", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 3,
                message: "la cantidad minima de caracteres es de 3",
              },
              maxLength: {
                value: "100",
                message: "la cantida maxima de caracteres es de 100",
              },
            })}
          />
          <Form.Text className="text-danger">
          {errors.nombreUsuario?.message}
          </Form.Text>
          <div>
          <label>Email</label>
          </div>
          <input 
          type="email" 
          className="form-control my-3" 
          {...register("email",{
            required:"El mail es obligatorio",
            pattern:{
                value:/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message:"El mail es obligatorio"
            }
          })}
          />
          <Form.Text className="text-danger">
          {errors.email?.message}
          </Form.Text>
          <label>Password</label>
          <input 
          type="password" 
          className="form-control" 
          {...register("password",{
            required:"El password es obligatorio",
            minLength:{
                value:8,
                message:"La cantidad minima de caracteres es de 8"
            },
            maxLength:{
                value:50,
                message:"La cantidad maxima de caracteres es de 50"
            }
          })}
          />
           <Form.Text className="text-danger">
          {errors.password?.message}
          </Form.Text>
          <div>
          <button className="btn btn-primary mt-4">Enviar</button>
          </div>
        </form> */}
      </div>
    </Container>
  );
};

export default Registro;
