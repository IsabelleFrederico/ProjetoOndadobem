import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 28px;
    font-family: cursive;

    @media only screen and (max-width: 436px){
        font-size: 20px;
    }     
`

export const Text = styled.h3`
    padding: 2px;
    margin: 2%; 
    @media only screen and (max-width: 578px){
        font-size: 18px;
    } 
`
export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin:0;
`
export const Li = styled.li`
    font-size: 20px;
    font-weight: bold;
    padding: 0.5rem;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    align-content:center;
    width: 40%;

    @media only screen and (max-width: 855px){
        margin-top: 2rem;
        width: 70%;
    } 
    @media only screen and (max-width: 578px){
        width: 70%;
    } 
    @media only screen and (max-width: 460px){
        width: 80%;
    } 
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    align-content:center;
`

export const Button = styled.button`
    border-radius: 20px;
    border-color: black;
    background: #FFDE59;
    font-size: 28px;
    padding: 12px;
    cursor: pointer;
    font-weight: bold;
    margin: 1rem;

    @media only screen and (max-width: 578px){
        font-size: 20px;
    } 
    
`

export const ImgCashew = styled.img`
    position: absolute;
    width: 300px;
    margin: -3rem 30rem;

    @media only screen and (max-width: 978px){
        width: 200px;
        margin: -3rem 20rem;
    }    
    @media only screen and (max-width: 855px){
        width: 100px;
        margin: -12rem 15rem;
    } 
    @media only screen and (max-width: 578px){
        width: 80px;
        margin: -12rem 12rem;
    } 
    @media only screen and (max-width: 460px){
        width: 80px;
        margin: -12rem 12rem;
    } 

`
export const ImgGuava = styled.img`
    position: absolute;
    width: 300px;
    margin: -3rem -30rem;

    @media only screen and (max-width: 978px){
        width: 200px;
        margin: -3rem -20rem;
    }  
    @media only screen and (max-width: 850px){
        width: 100px;
        margin: -12rem -15rem;
    } 
    @media only screen and (max-width: 578px){
        width: 80px;
        margin: -12rem -13rem;
    } 
    @media only screen and (max-width: 460px){
        width: 80px;
        margin: -12rem -12rem;
    } 
`