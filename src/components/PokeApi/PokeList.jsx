import { useEffect, useState } from "react"


const PokeList = () => {
     const [ List, setList] = useState([])
     console.log(List)

     useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setList(data.results)
        })

    }, [])

   /*  const handlesSiguiente = () => id < 20 && setId(id + 1)
    const handlesAnterior = () => id > 1 && setId(id - 1) */

    return (
        <div className="container my-3">
            <h2>Poke List</h2>
            <hr />

            <div className="container my-5">
                {
                  List.mapa((el) => <PokeCard key={el.name} url={el.url} />)
                }

            </div>

            
        </div>
        
    )
}

export default PokeList