 //import { useEffect, useRef, useState } from "react" 
import { useProductos } from "../../hooks/useProductos"
//import ItemList from "../ItemList/ItemList"
//import { pedirDatos } from "../../helpers/pedirDatos"





const Contacto  = () => {
    const { productos } =  useProductos()
    console.log(productos)

     return(
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr />
            
        </div>
     )
}

export default Contacto