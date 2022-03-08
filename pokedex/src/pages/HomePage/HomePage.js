import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constant/urls";
import DisplayPokemon from "../../Components/DisplayPokemons/DisplayPokemon";





const HomePage = () => {


    const [pokemon, setPokemon] = useState([
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ])

    // Only 20 pokemons so far
    const getAllPokemons = () => {
        axios
        .get(`${BASE_URL}`)
        .then((response) => {
            /* console.log(response.data.results) */
            setPokemon(response.data.results)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect (() => {
        getAllPokemons()
    })



    return(
        <div>
            <DisplayPokemon pokemon={pokemon}/>
        </div>
    )
}

export default HomePage