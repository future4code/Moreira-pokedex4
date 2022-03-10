import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant/urls";
import useRequestData from "../../hooks/useRequestData";

 
const PokeInfoCard = () => {

    const [requestData, loading] = useRequestData();
    
    const [pokeInfo, setPokeInfo] = useState([])

    const {pokemon} = useParams();

    

    const getPokeInfo = async () => {
        
        const response = await requestData(`${BASE_URL}${pokemon}`,"get")
        
        setPokeInfo([response])

    }

    useEffect (() => {
        getPokeInfo()
    }, [])

    
    /* console.log(pokeInfo)   */
    
    const pokemonInfo = pokeInfo.map((info) => {
            return (
                <div key={info.id}>
                    <h2>{info.species.name}</h2>
                    <img src={info.sprites.front_default} alt="" />
                    <img src={info.sprites.back_default} alt="" />
                    <img src={info.image2} alt="" />
                    <p>HP: {info.stats[0].base_stat}</p>
                    <p>ATTACK: {info.stats[1].base_stat}</p>
                    <p>DEFENSE: {info.stats[2].base_stat}</p>
                    <p>SP. ATTACK: {info.stats[3].base_stat}</p>
                    <p>SP. DEFENSE: {info.stats[4].base_stat}</p>
                    <p>SPEED: {info.stats[5].base_stat}</p>
                    <p>{info.types[0].type.name}</p>
                    <p>{info.types[1]?.type.name}</p>
                    <p>MOVES: {info.moves[0].move.name} / {info.moves[1].move.name}  / {info.moves[2].move.name}  / {info.moves[3].move.name} </p>
                </div>
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