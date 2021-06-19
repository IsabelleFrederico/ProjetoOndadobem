import React from 'react';
import * as S from './Style'
import mango from '../../img/Dobem_03.gif'

export const AboutUs = () => {
    return (
        <>
            <S.Header>
                <S.Title>Sobre nós</S.Title>
            </S.Header>
            <S.Main>
                <S.Text> O <strong> Grupo Onda do bem</strong> é um programa de apoio emocional mantido
                    fundado pela Ambev Tech.
                    O programa tem como objetivo apoiar, e ouvir pessoas com necessidade de ajuda emocional,
                    ajudando-as a lidar com as realidades cotidianas e inesperadas em qualquer lugar da comunidade.
                    Muitas vezes as pessoas só precisam ser ouvidas e com base nisso o Onda do bem mostra a cada uma delas que não é necessário surfar sozinho!
                </S.Text>
            </S.Main>
            <S.Img src={mango} alt="mango"></S.Img>
        </>
    )
}
export default AboutUs