const URL = process.env.REACT_APP_API_RECETAS




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