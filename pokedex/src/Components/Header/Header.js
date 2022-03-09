import * as React from "react";
//import { AppBar } from "@mui/material";
//import AppBar from '@mui/material/AppBar';
import AppBar from "@material-ui/core/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledToolbar } from "./styled";

const Header = () => {    
  

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">
          Pokédex
        </Typography>        
        <Button  color="inherit">
          Detalhes
        </Button>        
      </StyledToolbar>
    </AppBar>
  );
};
export default Header;
