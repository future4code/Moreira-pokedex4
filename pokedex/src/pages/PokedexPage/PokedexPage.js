import React, { useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard.js";
import {PageWrap} from './style.js'

const PokedexPage = () => {
    const savedDex = localStorage.getItem('dex');
    const initialDex = JSON.parse(savedDex);
    const savedList = localStorage.getItem('pokeList');
    const initialList = JSON.parse(savedList);
    const [dex, setDex] = useState(savedDex ? initialDex : []);
    const [pokeList, setPokeList] = useState(!savedList ? [] : initialList);

    const removePokedex = (id, name) => {
        console.log(id-1);
        console.log(name);

        let index;

        dex.forEach((poke) => {
            if (poke.name === name) {
                index = dex.indexOf(poke);
                return index;
            }
        });

        const pokeToList = dex.splice(index, 1);

        const listRest = pokeList.splice(id-1, pokeList.length);

        const newList = [...pokeList, pokeToList[0]];

        listRest.forEach((poke) => {
            newList.push(poke);
        });

        setPokeList(newList);
        localStorage.setItem('pokeList', JSON.stringify(newList));

        const newDex = [...dex];
        setDex(newDex);
        localStorage.setItem('dex', JSON.stringify(newDex));
        
    };

    const showDex = dex.map((value, index) => {
        return (
            <div key={index}>
                <PokeCard thisPokemon={value} removePokedex={removePokedex}/>
            </div>
        )
    })

    return(
        <PageWrap>
            <h2>Pokedex</h2>
            {showDex}
        </PageWrap>
    )
}
export default PokedexPage