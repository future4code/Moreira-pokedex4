import styled from 'styled-components';

export const PageWrap = styled.div`
    text-align: center; 
`;
export const MainContainer= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;
export const ImageBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 200px;
    }
    img:nth-child(2){
        margin-top: -20%;
    }
`;
export const InfoBlock = styled.div`
    text-align: left;
    padding: 1rem;
    margin: 0;
`;