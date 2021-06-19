import styled from 'styled-components'

export const Img = styled.img`
    width: 400px;
    margin-right: 10px;

    @media only screen and (max-width: 436px){
        width: 200px;;
    }
`

export const Title = styled.h1`
    font-size: 28px;
    font-family: cursive;
    margin: ${props => props.error ? "0" : ''};   
    
    @media only screen and (max-width: 436px){
        font-size: 20px;
    }     
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    align-content:center;
    margin-top: 1rem;
    grid-column:${props => props.progress ? "2" : 'auto'};
   
`