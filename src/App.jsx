import { Header } from "./components/Header/Header"

import { Clicker } from "./components/Clicker"
import Contenedor from "./components/Contenedor"
import MiBoton from "./components/MiBoton"
import Nosotros from "./components/Nosotros"
import { useState } from "react"

function App() {
     const [show, setShow] = useState(true)

     const mostrar =  () => {
      setShow(!show)
     }

  return (
    <div>
      <Header />
      <MiBoton color="yellow" click={mostrar}> 
        Click mi  <img src="/vite.svg" />
      </MiBoton>
      
      {
        show ? <Clicker /> : <p>clicker oculto</p>
      }
      
     
      {/* <Nosotros /> */}
{/* 
      <MiBoton color="yellow" click={saludar}> 
        Click mi  <img src="/vite.svg" />
      </MiBoton>

      <MiBoton color="grey" click={chau}> 
        Click mi  <img src="/vite.svg" />
      </MiBoton>

      <Contenedor>
        <Clicker />
      </Contenedor>*/}
    </div> 
  )
}

export default App
