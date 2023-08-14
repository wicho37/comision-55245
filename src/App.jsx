
/* import ItemListContainer  from "./components/ItemListContainer/ItemListContainer"
 */import { Header } from "./components/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from "./components/Pokeapi/PokeApi";
import PokeList from "./components/PokeApi/PokeList";
import PokeCard from "./ejemplos/PokeCard";



function App() {

  return (
    <div>
      <Header />
      {/* <ItemListContainer /> */}
      {/*   <PokeApi /> */}
      {/*< PokeList  />*/}
       <PokeCard />
        
   </div> 
  )
}

export default App
