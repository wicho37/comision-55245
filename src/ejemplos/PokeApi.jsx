import { useEffect, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import FetchData from "./renderprops/FetchData"


const PokeApi = () => {
    const [id, setId] = useState(1)

    const handlesSiguiente = () => setId(id + 1)
    const handlesAnterior = () => id > 1 && setId(id - 1)

    return (
        <div className="container my-5">
            <h2>Pokemons</h2>
            <hr />

            <FetchData url={`https://pokeapi.co/api/v2/pokemon/${id}`} arr={[id]}>
                {(pokemon) => (
                    <>
                        {
                            pokemon &&
                            <div>
                                <h4>{pokemon.name}</h4>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </div>
                        }
                    </>
                )}
            </FetchData>


            <button onClick={handlesAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handlesSiguiente} className="btn btn-primary mx-1">Siguiente</button>
        </div>

    )
}

export default PokeApi




/* const PokeApi = () => {
    const [id, setId] = useState(1)

    const { data: pokemon } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`,[id])

   


    const handlesSiguiente = () => setId(id + 1)
    const handlesAnterior = () => id > 1 && setId(id - 1) 

    return (
        <div className="container my-5">
            <h2>Pokemons</h2>
            <hr />

             {
                pokemon &&
                    <div>
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
            }

            <button onClick={handlesAnterior} className="btn btn-primary mx-1">Anterior</button>
            <button onClick={handlesSiguiente} className="btn btn-primary mx-1">Siguiente</button>
        </div>
        
    )
}

export default PokeApi */