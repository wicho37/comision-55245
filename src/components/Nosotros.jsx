import { useRef } from "react"




const Nosotros = () => {
    const ref = useRef();
    const date = useRef(new Date())/* new Date().toLocaleString() */
    
    if (counter % 10 === 0 ) {
        date.current = new Date()
     }
     console.log(ref.current)

    const scrollear = () => {
        ref.current.scrollIntoView()
        ref.current.innerText = "hola mundo"
    }


    return (
        <div>
            <h2>Nosotros</h2>
            <hr />

            <p>componente generado: {date.current.toLocaleString()}</p>

            <button onClick={scrollear}>Scroll</button>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit.
                  Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit
                 . Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit. 
                 Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit.
                  Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit. 
                 Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit.
                  Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit
                 . Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit. 
                 Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit.
                  Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
            <p ref={ref}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Tenetur ex voluptas laudantium. Rem beatae, amet nemo ipsam aspernatur iure impedit. 
                 Dolorem aperiam atque quod eligendi ullam laudantium libero commodi sit.</p>
        </div>
    )
}

export default Nosotros