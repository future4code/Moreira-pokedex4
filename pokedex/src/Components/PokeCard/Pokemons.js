import React from "react";
import PokeCard from "./PokeCard";


const Pokemons = ({pokemon, setPokemon}) => {
  
  return (
    <div>
        {
            pokemon.map((value, index) => {
                
                return (
                    <div key={index}>
                        <PokeCard thisPokemon={value} 
                        pokemon={pokemon}
                        setPokemon={setPokemon}
                        />
                    </div>
                )
            })
        }
    </div>
)
  
  
};
export default Pokemons;