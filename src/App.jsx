

import { Clicker } from "./components/Clicker"
import Contenedor from "./components/Contenedor"
import MiBoton from "./components/MiBoton"

function App() {


  return (
    <div>

      <MiBoton>Click mi  <img src="./public/vite.svg" /> </MiBoton>

      <Contenedor>
        <Clicker />
      </Contenedor>
    </div>
  )
}

export default App
