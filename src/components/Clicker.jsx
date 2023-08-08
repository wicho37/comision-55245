import { useState } from "react"



export const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)
    console.log(saludo)

  
    //console.log(counter)

    const estado = useState()
    console.log(estado)

    const clickear = () => {
        setCounter(counter + 1)
    }

    const cambiarSaludo = () => {
        //setSaludo(saludo === true ? false : true) es lo mismo q tener
        setSaludo(!saludo)
    }

    return (
        <div>
            <h2>Clicker</h2>
            <br />
            <button onClick={clickear}>Click me</button>
            <p>Clicks: {counter}</p>
            <hr />
            <button onClick={cambiarSaludo}>saludar</button>
            <p>{saludo ? "hola mundo"  : "chao mundo"}</p>
        </div>
    )
 
}