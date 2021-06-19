import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 28px;
    font-family: cursive;

    @media only screen and (max-width: 436px){
        font-size: 20px;
    }     
`

export const Text = styled.p`
    padding: 2px;
    width: 100%;
    margin: 2%; 
    font-size: 20px;
    text-align: justify;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    align-content:center;
`

export const Main = styled.main`
    display: flex;
    margin: 0 10rem;
`

export const Img = styled.img`
    margin: 0 30%;
`