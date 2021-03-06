import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonInfoPage from "../pages/PokemonInfoPage/PokemonInfoPage";
import Header from "../Components/Header/Header"


export const AllRoutes = () => {
    

    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path={"/"} element={<HomePage />}/>
                <Route exact path={"/pokedex"} element={<PokedexPage/>}/>
                <Route exact path={"/:pokemon"} element={<PokemonInfoPage/>}/>
                <Route exact path={"*"} element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
};