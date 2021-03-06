import * as React from "react";
import {useNavigate, useLocation} from 'react-router-dom'
//import { AppBar } from "@mui/material";
//import AppBar from '@mui/material/AppBar';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { StyledToolbar, PageWrap } from "./styled";
import logo from '../../assets/logoPokedex.png';
import {primaryColor, secundaryColor} from '../../constant/colors';

const Header = () => {    
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const rightButton = () => {
    if (pathname === '/') {
      return (
        <>
          <Button onClick={() => {navigate('/pokedex')}} sx={{color: primaryColor, background: secundaryColor, "&:hover": {
                bgcolor: "transparent"
              }}}>
            Pokedex
          </Button>    
        </>
      );  
    }
    else if (pathname === '/pokedex') {
      return (
        <Button onClick={() => {navigate('/')}} sx={{color: primaryColor, background: secundaryColor}}>
          Pokelista
        </Button>
      )
    }
    else {
      return(
        <Button onClick={() => {navigate(-1)}} sx={{color: primaryColor, background: secundaryColor}}>
          Voltar
        </Button>
      );
    }
  };

  return (
    <PageWrap>
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6">

          <img src={logo} alt="logo pokedex" style={{width: '200px', marginTop: '5px'}}/>
        </Typography>
        
        {rightButton()}


      </StyledToolbar>
    </AppBar>
    </PageWrap>
  );
};
export default Header;
