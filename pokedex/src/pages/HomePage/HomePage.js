import React, { useEffect, useState} from "react";
import axios from "axios";
import {PageWrap} from './style';
import { BASE_URL } from "../../constant/urls";
import Pokemons from "../../Components/PokeCard/Pokemons";
import useRequestData from "../../hooks/useRequestData";

const HomePage = () => {    

   const [pokemon, setPokemon] = useState([
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
    ])

    const [requestData, loading] = useRequestData();

    // Only 20 pokemons so far
   const getAllPokemons = async () => {
        
        const response = await requestData(`${BASE_URL}?offset=0&limit=20`,"get")
        setPokemon(response.results)

        /* console.log(response)  */
   }
   
    useEffect (() => {
        getAllPokemons() 
      
    }, [])  


    return(
        <PageWrap>
            <div>
                {loading && "...Carregando"}
                <Pokemons pokemon={pokemon} setPokemon={setPokemon}/>
            </div>
        </PageWrap>
    );
};

export default HomePage; 