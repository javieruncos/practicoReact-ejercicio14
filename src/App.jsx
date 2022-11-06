import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/view/Inicio";
import Admnistrador from "./components/view/Admnistrador";
import Error404 from "./components/view/Error404";
import Menu from "./components/common/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";
import CrearProducto from "./components/view/producto/CrearProducto";
import EditarProducto from "./components/view/producto/EditarProducto";
import DetalleProducto from "./components/view/producto/DetalleProducto";
import Login from "./components/view/producto/Login";
import Registro from "./components/view/producto/Registro";
import {useState} from "react"

function App() {

   const usuario = JSON.parse(localStorage.getItem("usuario")) || {};
    const [Usuario, setUsuario] = useState(usuario)





  return (
    <div className="App">
      <BrowserRouter>
        <Menu Usuario={usuario} setUsuario={setUsuario}></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Admnistrador></Admnistrador>}
          ></Route>
          <Route
            exact
            path="/crearProducto"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route
            exact
            path="/administrador/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login></Login>}
          ></Route>
          <Route
            exact
            path="/registro"
            element={<Registro setUsuario={setUsuario}></Registro>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
