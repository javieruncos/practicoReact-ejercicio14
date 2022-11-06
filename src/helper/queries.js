

const URL = process.env.REACT_APP_API_RECETAS
const URLusuario = process.env.REACT_APP_API_USUARIO;



export const consultarApi = async()=>{
  try{
    const respuesta = await fetch(URL)
    const listaRecetas = await respuesta.json()
    return listaRecetas
  }catch(error){
    console.log(error)
    return false
  }
}




export const crearProductoApi = async(receta)=>{
   try{
     const respuesta = await fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(receta)
     });
     return respuesta
   }catch(error){
    console.log(error)
    return false
   }
}



export const borrarProductoApi= async(id)=>{
    try{
      const respuesta = await fetch(URL+"/"+id,{
        method:"DELETE",
      });
      return respuesta

    }catch(error){
      console.log(error)
      return false
    }
}




export const obtenerRecetaApi = async(id)=>{
   try{
      const respuesta = await fetch(URL+"/"+id)
      const receta ={
        dato: await respuesta.json(),
        status: respuesta.status
      };
      return receta
   }catch(error){
    console.log(error)
    return false
   }
}




export const editarRecetaApi = async(id,receta)=>{
  try{
    const respuesta = await fetch(URL+"/"+id,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(receta)
    });
    return respuesta

  }catch(error){
    console.log(error)
    return false
  }
}





export const crearUsuario = async(usuario)=>{
    try {
      const respuesta = await fetch(URLusuario,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(usuario)
      })
      return respuesta
      
    } catch (error) {
      console.log(error)
      return false
    }
}