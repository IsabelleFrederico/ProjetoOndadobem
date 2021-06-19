import React from 'react'
import { useForm } from '../../Hooks/useForm'
import { initialForm } from '../../Contants/inputs'
import { gender } from '../../Contants/options'
import grape from '../../img/grape.png'
import * as S from './Style'

export const VolunteerForm = () => {

    const [form, onChange, resetForm] = useForm(initialForm)

    const sendForm = (e) => {
        e.preventDefault()
        console.log(sendApplication())
        resetForm()
    }

    const sendApplication = async () => {
        const result = {
            name: form.name,
            age: form.age,
            applicationText: form.text,
            profession: form.profession,
            country: form.country
        }
        return result
    }

    const genderOption = gender.map((gender) => {
        return (
            <option value={gender}>{gender}</option>
        )
    })

    return (
        <>
            <S.ContainerInput onSubmit={sendForm}>
                <S.Input
                    required
                    type="text"
                    name={'name'}
                    value={form.name} onChange={onChange}
                    placeholder={"Nome Completo"}
                    title={'Nome inválido'}
                    pattern={"^([a-zA-Z]|[à-ú]|[À-Ú]|[ ])+$"} />

                <S.Input
                    required
                    type="number"
                    name={'age'}
                    value={form.age} onChange={onChange}
                    placeholder={"Idade"}
                    title={'formato de idade inválido'}
                    min={18}
                    pattern={"^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$"} />

                <S.Select
                    name={"gender"}
                    value={form.gender}
                    onChange={onChange}
                    required
                >
                    <option value="" disabled>Sexo</option>
                    {genderOption}
                </S.Select>

                <S.Input
                    required
                    type="text"
                    name={'text'}
                    value={form.text} onChange={onChange}
                    placeholder={"Motivação"}
                    title={"Cuidado com os caracteres especiais"} />

                <S.Input
                    required
                    type="text"
                    name={'profession'}
                    value={form.profession}
                    onChange={onChange}
                    placeholder={"Profissão"}
                    title={'A profissão deve ter no mínimo 3 caracteres, sem acento'}
                    pattern={"([a-zA-Z]*[a-zA-Z]||[ ]){3,}[a-zA-Z0-9]*$"} />

                <S.Button>Enviar</S.Button>
            </S.ContainerInput>
            <S.Img src={grape} alt="uva"></S.Img>
        </>
    );

}
export default VolunteerForm
