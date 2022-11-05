import React from "react";
import { CardContainer } from "./styles";



export default ({title}) => {
    return ( 
    <CardContainer>
        <div className="Card">
        <div className="Title">{title}</div>
        {/* <div className="PokemonName">Pokemon</div> */}
    </div>
    </CardContainer> 
    
    )
    
};