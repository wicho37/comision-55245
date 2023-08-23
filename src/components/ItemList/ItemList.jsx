import ItemCard from "../ItemCard/ItemCard"

const ItemList = ({productos}) => {
    return (
        <div className="container">
            <h2>PRODUCTOS</h2>
            <hr />
            
            {/* renderizar los productos*/}
            <div className='row'>
                {
                    productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                }
            </div>
        </div>
    )
}

export default ItemList