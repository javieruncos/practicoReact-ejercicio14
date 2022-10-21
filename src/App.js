import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/view/Inicio";
import Admnistrador from "./components/view/Admnistrador";
import Error404 from "./components/view/Error404";
import Menu from "./components/common/Menu";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Admnistrador></Admnistrador>}
          ></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
