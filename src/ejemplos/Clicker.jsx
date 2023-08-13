import { useState, useEffect } from "react"



export const Clicker = () => {
    const [counter, setCounter] = useState(0)
    const [saludo, setSaludo] = useState(true)

    const clickear = () => {
        setCounter(counter + 1)
    }
    const cambiarSaludo = () => {
        //setSaludo(saludo === true ? false : true) es lo mismo q tener
        setSaludo(!saludo)
    }

    useEffect(() => {
        console.log("clicker Montado")
    }, [])

    useEffect(() => {
        //bloque del efecto
        console.log("Counter actualizado")

        // funcion efecto de limpieza
        return () => {
            console.log(counter)
            console.log(" Efecto de Limpieza")
         }
    }, [counter, saludo])



//  ESTE SERIA UN CLARO EJEMPLO PARA DISPARAR DESPUES DE 2 SEGUNDOS CON ASINCRONIA
    useEffect(() => {
        //bloque del efecto
        const interval = setTimeout(() => {
            console.log("hola mundo")
        }, 2000);
        

        // funcion efecto de limpieza
        return () => {
            clearTimeout(interval)
         }
    }, [saludo])


    //useEffect(() => {
    //    fetch("https://jsonplaceholder.tipicode.com/posts/1")
    //          .then((response) => response.json())
    //          .then((json) => console.log(json))
    //}, [])


    return (
        <div>
            <h2>Clicker</h2>

            <br />
            <button onClick={clickear}>Click me</button>
            <p>Clicks: {counter}</p>
            <hr />
            <button onClick={cambiarSaludo}>saludar</button>
            <p>{saludo ? "hola mundo" : "chao mundo"}</p>
        </div>
    )

}