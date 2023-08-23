
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Header from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from "./ejemplos/PokeApi";
import PokeList from "./ejemplos/PokeList";
import Contacto from "./components/Contacto/Contacto";
import Post from "./ejemplos/Post";
import ItemList2, {Contacto2} from "./ejemplos/hoc/ItemList2";
import ItemList3 from "./ejemplos/renderprops/ItemList3";




function App() {

  return (
    <div>
      <Header />
     
      {/* <ItemList2 saludo="hola mundo" /> */}
      {/* <Contacto2 nombre="clemencia"/> */}
      {/* <ItemList3 /> */}
      {/* <Contacto /> */} 
      {/* <ItemListContainer />  */}
       <PokeApi />
      <Post /> 
      {/* < PokeList  /> */}
    </div>
  )
}

export default App
