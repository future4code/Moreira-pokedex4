import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PokeCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, margin: '10px', border: '2px solid yellow'}}>
      <CardMedia
        component="img"
        height="300"
        image={"https://img.joomcdn.net/5b0b3d8c71b6a293e51463dbc3f901e340f810e6_original.jpeg"}
        alt="green iguana"
        sx={{objectFit: 'cover'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {'Charizard'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{'Adicionar na Pokedex'}</Button>
        <Button size="small">{'Detalhes'}</Button>
      </CardActions>
    </Card>
  );
};
export default PokeCard;