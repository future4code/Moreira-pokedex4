import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant/urls";
import useRequestData from "../../hooks/useRequestData";
import {PageWrap, MainContainer, ImageBlock, InfoBlock} from './style.js';
 
const PokeInfoCard = () => {

    const [requestData, loading] = useRequestData();
    
    const [pokeInfo, setPokeInfo] = useState([])

    const {pokemon} = useParams();

    

    const getPokeInfo = async () => {
        
        const response = await requestData(`${BASE_URL}${pokemon}`,"get")
        
        setPokeInfo([response])

    }

    

    
    /* console.log(pokeInfo)  info.species.name */
    
    const pokemonInfo = pokeInfo.map((info) => {
            return (
                <PageWrap key={info.id}>
                    <h2>{info.species.name.charAt(0).toUpperCase() + info.species.name.slice(1)}</h2>
                    <p>{`${info.types[0].type.name} ${info.types[1] ? info.types[1].type.name : ''}`}</p>
                    <MainContainer>
                        <ImageBlock>
                            <img src={info.sprites.front_default} alt="Pokemon sprite front" />
                            <img src={info.sprites.back_default} alt="Pokemon sprite backwards" />
                        </ImageBlock>
                        <InfoBlock>
                            <p>HP: {info.stats[0].base_stat}</p>
                            <p>ATTACK: {info.stats[1].base_stat}</p>
                            <p>DEFENSE: {info.stats[2].base_stat}</p>
                            <p>SP. ATTACK: {info.stats[3].base_stat}</p>
                            <p>SP. DEFENSE: {info.stats[4].base_stat}</p>
                            <p>SPEED: {info.stats[5].base_stat}</p>
                            <p>MOVES: {info.moves[0].move.name} / {info.moves[1].move.name}  / {info.moves[2].move.name}  / {info.moves[3].move.name} </p>
                        </InfoBlock>
                    </MainContainer>
                </PageWrap>
            )
        })   
 
    

    return(
        <div>
            {loading && "...Carregando"}
            {pokemonInfo}
        </div>
    )
}

export default PokeInfoCard