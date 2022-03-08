import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = ({thisPokemon}) => {

    const [onePokemon, setOnePokemon] = useState({
        name:"",
        sprites: {
            front_default: ""
        }
    })
    
    const getPokemon = (url) => {
        axios
            .get(url)
            .then((response) => {
                /* console.log(response) */
                setOnePokemon(response.data)
            })
            .catch((error) => {
                /* console.log(error) */
            })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    })

    return (
        <div>
           <p>{onePokemon.name}</p>
           <img src={onePokemon.sprites.front_default} alt="Pokemon Icon" />
        </div>
    )
}

export default Pokemon;