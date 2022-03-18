import React from "react";
import error404 from "../../assets/error404.jpg"
import { Typography } from "@material-ui/core";
import { ErrorImage, ErrorPageContainer } from "./styled";

const ErrorPage = () => {

    return(
        <ErrorPageContainer>            
            <ErrorImage src={error404}/>
            
            <Typography 
            color={'primary'} 
            variant={'h4'} align={'center'}
            >Erro 404 - Página não encontrada!
            </Typography>          
          
        </ErrorPageContainer>
    )
}

export default ErrorPage