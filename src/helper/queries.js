const URL = process.env.REACT_APP_API_RECETAS




export const consultarApi = async()=>{
  try{
    const respuesta = await fetch(URL)
    const listaRecetas = await respuesta.json()
    console.log(listaRecetas)
    return listaRecetas
  }catch(error){
    console.log(error)
    return false
  }
}