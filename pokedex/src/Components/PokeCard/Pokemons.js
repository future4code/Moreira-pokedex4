import React from "react";
import PokeCard from "./PokeCard";


const Pokemons = ({pokemon}) => {
  
  return (
    <div>
        {
            pokemon.map((value, index) => {
                
                return (
                    <div key={index}>
                        <PokeCard thisPokemon={value}/>
                    </div>
                )
            })
        }
    </div>
)
  
  
};
export default Pokemons;