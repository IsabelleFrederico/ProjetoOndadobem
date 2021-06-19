import React from 'react';
import * as S from './Style'
import mango from '../../img/mango.png'

export const Error = () =>  {

    return (
        <S.Container>

             <S.Img src={mango} alt='Logo' />
             <S.Title>Ooops! Erro 404</S.Title>

             <S.Title>Página não encontrada</S.Title>

        </S.Container>
    )
}
export default Error