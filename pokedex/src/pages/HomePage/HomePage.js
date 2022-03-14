import React, { useEffect, useState} from "react";
import {PageWrap} from './style';
import { BASE_URL } from "../../constant/urls";
import Pokemons from "../../Components/PokeCard/Pokemons";
import useRequestData from "../../hooks/useRequestData";

const HomePage = () => {    

    const savedDex = localStorage.getItem('dex');
    const initialDex = JSON.parse(savedDex);
    const savedList = localStorage.getItem('pokeList');
    const initialList = JSON.parse(savedList);
    const [pokemon, setPokemon] = useState(!savedList ? [] : initialList);
    const [dex, setDex] = useState(!initialDex ? [] : initialDex);
    const [requestData, loading] = useRequestData();

    // Only 20 pokemons so far
    const getAllPokemons = async () => {
        
        const response = await requestData(`${BASE_URL}?offset=0&limit=20`,"get")
        setPokemon(response.results);
    }
   
    useEffect (() => {
           !savedList && getAllPokemons(); 
    }, [])

    
    const addPokedex = (id, name) => {
        let index;

        pokemon.forEach((poke) => {
            if (poke.name === name) {
                index = pokemon.indexOf(poke);
                return index;
            }
        });

        const pokeToDex = pokemon.splice(index, 1);

        const dexRest = dex.splice(id-1, dex.length);

        const newDex = [...dex, pokeToDex[0]];

        dexRest.forEach((poke) => {
            newDex.push(poke);
        });

        setDex(newDex);
        localStorage.setItem('dex', JSON.stringify(newDex));

        const newList = [...pokemon];
        setPokemon(newList);
        localStorage.setItem('pokeList', JSON.stringify(newList));
    }

    return(
        <PageWrap>
            <h2>Poke lista</h2>
            <div>
                {loading && "...Carregando"}
                <Pokemons pokemon={pokemon} setPokemon={setPokemon} addPokedex={addPokedex}/>
            </div>
        </PageWrap>
    );
};

export default HomePage;