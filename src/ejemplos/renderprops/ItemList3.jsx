import ItemCard from "../../components/ItemCard/ItemCard";
import ProductsData from "./ProductsData"

const ItemList3 = () => {

    return(
        <div className="container my-5">
           <h2>Productos</h2>
           <hr />

           <ProductsData>
               {(productos, loading) =>(
                  <div className="row">
                      {
                        loading
                            ? <h2>cargando...</h2>
                            : productos.map((prod) => <ItemCard key={prod.Id} item={prod} /> )
                      }
                  </div>
               )}
           </ProductsData>
        </div>
    )
}


export default ItemList3