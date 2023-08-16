import { useEffect, useState } from "react"
import PokeCard from "./PokeCard"


const PokeList = () => {
     const [ List, setList] = useState([])
     const [ pagination, setPagination] = useState({
        next: null,
        previous: null
     })
     const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

     useEffect(() => {
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
             
             setList(data.results)  
             setPagination({
                next: data.next,
                previous: data.previous
             })
        })

    }, [url])

    const handlesSiguiente = () => {
        pagination.next && setUrl(pagination.next)
    }
    const handlesAnterior = () => {
        pagination.previous && setUrl(previous.next)
    }

    return (
        <div className="container my-5">
            <h2>Pokemon List</h2>
            <hr />
            <button onClick={handlesAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handlesSiguiente} className="btn btn-primary mx-1">Siguiente</button>

            <div className="row">
                {
                List.map((el) => <PokeCard key={el.name} url={el.url} />) 
                }

            </div> 

            
        </div>
        
    )
}

export default PokeList