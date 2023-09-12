


const ItemCard = ({item}) => {
    return (
        <div className="col-3 m-2 rounded-sm">
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre} />
            <p>{item.descripcion}</p>
            <p>precio: ${item.precio}</p>
            <button>Ver más</button>
        </div>
    )
}

export default ItemCard