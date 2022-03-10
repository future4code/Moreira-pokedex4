import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constant/urls";
import { PageWrap } from './style';
 
const PokemonInfoPage = () => {
    const [pokeInfo, setPokeInfo] = useState({});
    const {pokemon} = useParams();

    const getPokeInfo = async () => {
        const realOficial = {};

        try {
            const res = await axios.get(`${BASE_URL}${pokemon}`);
            realOficial = res.data;
            return realOficial;
        }
        catch (err) {console.log(err.response)
        }
        finally {
            return realOficial;
        };
    };

    return(
        <PageWrap>
            <h2>{pokemon}</h2>
            <p>{}</p>
        </PageWrap>
    )
}

export default PokemonInfoPage