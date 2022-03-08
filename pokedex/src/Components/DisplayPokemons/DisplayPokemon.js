import React from "react";
import Pokemon from "./Pokemon";

const DisplayPokemon = ({pokemon}) => {

    return (
        <div>
            {
                pokemon.map((value, index) => {
                    
                    return (
                        <div key={index}>
                            {/* <p>{value.name}</p> */}
                            <Pokemon thisPokemon={value}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayPokemon;