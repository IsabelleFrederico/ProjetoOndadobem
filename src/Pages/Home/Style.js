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
    margin-top: 10%; 
    font-size: 20px;
    text-align: justify;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    align-content:center;
    width: 100%
`
export const Main = styled.main`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    align-content:center;

    @media only screen and (max-width: 436px){
        flex-direction: column;
    } 
`
export const Img = styled.img`
    width: 30%;
 
`
export const Section = styled.section`
    width: 50%
`