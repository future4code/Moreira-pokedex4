import React from "react";
import {PageWrap} from './style';
import PokeCard from "../../components/PokeCard/PokeCard.js";

const HomePage = (props) => {

    return(
        <PageWrap>
            <h2>Poke List</h2>
            <div>
                <PokeCard/>
            </div>
        </PageWrap>
    );
};

export default HomePage;