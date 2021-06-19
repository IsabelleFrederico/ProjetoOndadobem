import React, { useState } from 'react';
import VolunteerForm from '../../Components/VolunteerForm/VolunteerForm';
import cashew from '../../img/cashew.png'
import guava from '../../img/guava.png'
import * as S from './style'

export const Volunteer = () => {
    const [form, setForm] = useState(false)

    const openForm = () => {
        setForm(!form)
    }

    return (
        <S.Container>
            {form ?
                <>
                    <S.Title>Quer ser voluntário(a)?</S.Title>
                    <VolunteerForm />
                </>
                :
                <>
                    <S.ImgGuava src={guava} alt="guava"></S.ImgGuava>
                    <S.ImgCashew src={cashew} alt="cashew"></S.ImgCashew>
                    <S.Title>Quer ser voluntário(a)?</S.Title>
                    <S.Main>
                        <S.Text> O processo para se tornar voluntário(a) se dará por 3 etapas:</S.Text>
                        <S.Ul>
                            <S.Li><u>Primeira etapa</u>: Preenchimento do formulário de inscrição</S.Li>
                            <S.Li><u>Segunda etapa</u>: Será realizado uma entrevista para avaliação de perfil</S.Li>
                            <S.Li><u>Terceira etapa</u>: Início do treinamento preparatório</S.Li>
                        </S.Ul>
                        <S.Text> Todas as etapas são eliminatórias e o contato de aprovação ou não será enviado por email</S.Text>
                    </S.Main>
                    <S.Button onClick={() => openForm()}>Inscreva-se</S.Button>
                </>}
        </S.Container>
    );

}
export default Volunteer
