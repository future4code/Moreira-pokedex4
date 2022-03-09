import React from "react";
import {PageWrap} from './style';
import PokeCard from '../../Components/PokeCard/PokeCard';

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