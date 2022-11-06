import React from "react";
import { Container } from "react-bootstrap";
import "../producto/Login.css";
import { useForm } from "react-hook-form";
import { Form,Button } from "react-bootstrap";
import { login } from "../../../helper/queries";
import { useNavigate } from "react-router-dom";

const Login = ({setUsuario}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const navigate = useNavigate()



  const onSubmit = (dato)=>{
      login(dato).then((respuesta)=>{
          if(respuesta){
              localStorage.setItem("usuario",JSON.stringify(respuesta))
              setUsuario(respuesta)
              navigate("/administrador")
          }
      })
  }





  return (
    <Container className=" mainSection my-5">
      <div className="my-5  mx-auto divForm">
        <h1 className="text-center">Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)} className="shadow py-5 px-5">

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
           Enviar
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
