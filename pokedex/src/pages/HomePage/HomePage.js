import React, { useEffect, useState} from "react";
import axios from "axios";
import {PageWrap} from './style';
import { BASE_URL } from "../../constant/urls";
import Pokemons from "../../Components/PokeCard/Pokemons";


const HomePage = (props) => {

    const [pokemon, setPokemon] = useState([
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ])

    // Only 20 pokemons so far
    const getAllPokemons = () => {
        axios
        .get(`${BASE_URL}?offset=0&limit=20`)
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
        <PageWrap>
            <div>
                <Pokemons pokemon={pokemon}/>
            </div>
        </PageWrap>
    );
};

export default HomePage;