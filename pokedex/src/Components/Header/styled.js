import styled from "styled-components"
import Toolbar from '@mui/material/Toolbar'

export const PageWrap = styled.div`
    button:hover{
        background-color: yellow;
    }
`;
export const StyledToolbar = styled(Toolbar)`
    display:flex;
    flex-direction: row;
    justify-content: space-between;    
`;
