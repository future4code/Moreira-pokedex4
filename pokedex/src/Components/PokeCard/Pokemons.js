import React from "react";
import PokeCard from "./PokeCard";


const Pokemons = ({pokemon, addPokedex}) => {
  
  return (
    <div>
        {
            pokemon.map((value, index) => {
                
                return (
                    <div key={index}>
                        <PokeCard thisPokemon={value} addPokedex={addPokedex}/>
                    </div>
                )
            })
        }
    </div>
)
  
  
};
export default Pokemons;