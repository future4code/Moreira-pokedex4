import React, { useEffect, useState} from "react";
import axios from "axios";
import {PageWrap} from './style';
import PokeCard from "../../Components/PokeCard/PokeCard.js";
import { BASE_URL } from "../../constant/urls";


const HomePage = (props) => {

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
        <PageWrap>
            <div>
                <PokeCard pokemon={pokemon}/>
            </div>
        </PageWrap>
    );
};

export default HomePage;