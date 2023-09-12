import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Contacto from "./components/Contacto/Contacto";
import PokeApi from "./ejemplos/PokeApi";
import Home from "./components/Home/Home";
import "./App.css"





function App() {


  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={ <ItemListContainer />}/>
            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/Contacto" element={ <Contacto />} />
            <Route path="/PokeApi" element={ <PokeApi />} />
            <Route path="/Home" element={ <Home />} />
            {/* <Routeoute path="*" element={ <Error-404 />} /> */}
            <Route path="*" element={ <Navigate to="/" />} />

        </Routes>
          
    </BrowserRouter> 
  )
}

export default App
