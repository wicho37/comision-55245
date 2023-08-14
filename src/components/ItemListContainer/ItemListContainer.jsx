import { useEffect, useRef, useState } from "react"
import "./ItemListContainer.scss"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
     const [productos, setProductos] = useState([])
     console.log(productos)

     useEffect(() => {
          pedirDatos()
               .then((res) => {
                    setProductos(res)
               })
               .catch((error) => {
                    console.log(error)
               })
     }, [])

     useEffect(() => {
               fetch ("https://jsonplaceholder.typicode.com/posts")
                   .then((resp) => resp.json()
                   .then((data) => {
                        console.log(data)
                   }))
     }, [])

     return (
          <div> 
               <ItemList productos={productos} />
          </div>
     )
}


export default ItemListContainer