import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Pokemon = ({thisPokemon}) => {

    const [onePokemon, setOnePokemon] = useState({
        name:"",
        sprites: {
            front_default: ""
        }
    })
    
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

    return (
        <div>
            <Card sx={{ maxWidth: 345, margin: '10px', border: '2px solid yellow'}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={onePokemon.sprites.front_default}
                    alt="Pokemon Icon"
                    sx={{objectFit: 'cover'}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {onePokemon.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">{'Adicionar na Pokedex'}</Button>
                    <Button size="small">{'Detalhes'}</Button>
                </CardActions>    
            </Card>
        </div>
    )
}

export default Pokemon;
