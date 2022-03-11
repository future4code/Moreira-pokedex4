import styled from "styled-components"
import Toolbar from '@mui/material/Toolbar'
import Button from "@mui/material/Button";
import {primaryColor, secundaryColor} from '../../constant/colors.js';

export const StyledToolbar = styled(Toolbar)`
    display:flex;
    flex-direction: row;
    justify-content: space-between;    
`;
export const StyledButton = styled(Button)`
    background-color: blue;

    &:hover{
        background: none;
    }
`;