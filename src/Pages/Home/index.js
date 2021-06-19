import React, { useState } from 'react';
import * as S from './Style'
import chat from '../../img/chat.png'
import email from '../../img/email.png'
import call from '../../img/Liga.png'

export const Home = () => {
 

    return (
        <S.Container>
            <S.Title>Entre em contato</S.Title>
            <S.Main>
                <S.Img src={call} alt="Telefone"></S.Img>
                <S.Img src={chat} alt="Chat"></S.Img>
                <S.Img src={email} alt="email"></S.Img>
            </S.Main>
            <S.Section>
                <S.Text>
                O <strong>Grupo Onda do bem</strong> tem como foco dar 
                auxílio 24h a pessoas que precisam de suporte emocional e não sabem por onde começar.
                </S.Text>
            </S.Section>
        </S.Container>
    )
}
export default Home
