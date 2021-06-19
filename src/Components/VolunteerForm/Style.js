import styled from 'styled-components'

export const ContainerInput = styled.form`
    display: flex;
    justify-items: center;
    align-items:center;
    flex-direction: column;
    margin: 1em;

    @media only screen and (max-width: 955px){
        margin: 1px 30%;
    }
`
export const Select = styled.select`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: 255%; 
    padding: 5% 2%; 
    border-radius: 2rem;
    margin-bottom: 1rem;
    border: 2px inset rgb(160, 160, 160);

    @media only screen and (max-width: 955px){
        width: 200%;
    }
    @media only screen and (max-width: 710px){
        width: 155%;
    }
`
export const Input = styled.input`
    font-family: monospace;
    color: gray;
    font-size: 20px;
    width: 250%;
    padding: 5% 2%; 
    border-radius: 2rem;
    margin-bottom: 1rem;
    border: 2px inset rgb(160, 160, 160);

    @media only screen and (max-width: 955px){
        width: 200%;
    }
    @media only screen and (max-width: 710px){
        width: 150%;
    }
`
export const Button = styled.button`
    border-radius: 20px;
    border-color: black;
    background: #FFDE59;
    font-size: 28px;
    padding: 12px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 0.2rem;

    @media only screen and (max-width: 955px){
        margin-top: ${props => props.back ? "18%" : "7%"};
        font-weight: bold;
    }
`
export const Img = styled.img`
    display: flex;
    position: absolute;     
    margin: 10% 35%;
    
    @media only screen and (max-width: 955px){
        margin: 20% 35%;
    }
    @media only screen and (max-width: 710px){
        width: 140px;
        margin: 35% 35%;
    }
    @media only screen and (max-width: 385px){
        margin: 55% 53%;
    }
`