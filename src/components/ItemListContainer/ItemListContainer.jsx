import { useEffect, useState } from "react"
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"





const ItemListContainer = () => {
     const [productos, setProductos] = useState([])
     const [loading, setLoading] = useState(true)
 
     useEffect(() => {
         setLoading(true)
 
         pedirDatos()
              .then(r => setProductos(r))
              .catch(e => console.log(e))
              .finally(() => {
                 setLoading(false)
              })
     }, [])
     
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
