import { useEffect, useState } from "react"


const PokeApi = () => {
    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    console.log(id)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })
    }, [id])


    const handlesSiguiente = () => setId(id + 1)
    const handlesAnterior = () => id > 1 && setId(id - 1) 

    return (
        <div className="container my-3">
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

export default PokeApi