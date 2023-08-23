import { useEffect, useRef, useState } from "react"
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useProductos } from "../../hooks/useProductos"



const ItemListContainer = () => {
     const { productos, loading } =  useProductos()
     console.log(loading, productos)
     
     return (
          <div> 
               {
                    loading
                    ? <h2>Cargando....</h2>
                    :  <ItemList productos={productos} />
               }
          </div>
     )
}


export default ItemListContainer
