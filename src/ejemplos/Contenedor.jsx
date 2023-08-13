/* 




const Contenedor = ( {children} ) => {

    const estilos = {
      background: "grey",
      color: "white",
      padding: "20px",
      margin: "0 auto",
      maxWidth: "1100px",
    };
  
    return (
      <div style={estilos}>
        { children }
      </div>
    );
  };
  
  export default Contenedor; */




const Contenedor = ({children}) => {
 
    const estilos = {
        background:"grey", 
        color:"black",
        padding:"20px", 
        margin:" 0 aut0",
        maxWidth:"1200px"
    };

    return (
        <div style={estilos}> 
            {children}

            {/* <h2>MI TITULO</h2>
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sit temporibus fuga nesciunt maxime provident nisi eos minus
                molestiae fugit similique ducimus ex, cum placeat voluptatem
                autem ea rerum consequatur voluptatibus error. Magnam quo cupiditate,
                fugit placeat neque rerum quod. Necessitatibus veniam dolorem, culpa,
                inventore, quos nemo commodi et cupiditate laudantium illo
                vero voluptatem optio fugit magni sit? Excepturi inventore obcaecati quam iusto,
                possimus corrupti facere, quo ratione est alias rerum nulla sequi beatae cum dolores!
                Mollitia dignissimos quia, quae placeat suscipit sed deserunt eligendi ipsum quam,
                at nostrum qui debitis! Voluptatibus, temporibus.
                Optio cupiditate maiores harum minima dolores eum ipsum!</p>

                */}
        </div>
    )
}


export default Contenedor