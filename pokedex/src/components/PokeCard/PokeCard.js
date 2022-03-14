import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {primaryColor} from '../../constant/colors.js';
import { useNavigate, useLocation } from "react-router-dom";

const PokeCard = ({thisPokemon, addPokedex, removePokedex}) => {
    const navigate = useNavigate();
    const [onePokemon, setOnePokemon] = useState({
        name:"",
        sprites: {
            front_default: ""
        }
    })
    const location = useLocation();
    
    const getPokemon = (url) => {
        axios
            .get(url)
            .then((response) => {
                /* console.log(response) */
                setOnePokemon(response.data)
            })
            .catch((error) => {
                /* console.log(error) */
            })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    })

    const clickCard = () => {
        navigate(`/${onePokemon.name}`);
    }

    const changeButton = () => {
        if (location.pathname === '/pokedex') {
            return (
                <Button variant="outlined" size="small" sx={{color: `${primaryColor}`, outline: `2px solid ${primaryColor}` , marginBottom: '10%'}} onClick={() => removePokedex(onePokemon.id, onePokemon.name)}>{'Remover da Pokedex'}</Button>
            );
        }
        else {
            return (
                <Button variant="outlined" size="small" sx={{color: `${primaryColor}`, outline: `2px solid ${primaryColor}` , marginBottom: '10%'}} onClick={() => addPokedex(onePokemon.id, onePokemon.name)}>{'Adicionar na Pokedex'}</Button>
            );
        }
    }

    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '10px', border: '2px solid yellow', cursor: 'pointer'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={onePokemon.sprites.front_default}
                    alt="Pokemon Icon"
                    sx={{objectFit: 'cover'}}
                    onClick={() => {clickCard()}} 
                />
                <CardContent onClick={() => {clickCard()}}>
                    <Typography gutterBottom variant="h3" component="div">
                        {onePokemon.id}.{onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1)}
                    </Typography>
                </CardContent>
                <CardActions>
                    {changeButton()}
                </CardActions>    
            </Card>
         </div>
    )
}

export default PokeCard;
