import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contacto from "./components/Contacto/Contacto";
import PokeApi from "./ejemplos/PokeApi";



function App() {


  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/ItemListContainer" element={ <ItemListContainer />}/>
            <Route path="/Contacto" element={ <Contacto />} />
            <Route path="/PokeApi" element={ <PokeApi />} />
        </Routes>
          
    </BrowserRouter> 
  )
}

export default App
