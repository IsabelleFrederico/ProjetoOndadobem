import React from 'react';
import * as S from './Style'
import logo from '../../img/logo.png'

export const Header = () => {

    const menuItems = ['Home', 'Sobre', 'Quer ser volutário?']
    const menuLinks = ['/', '/aboutUs', '/volunteer']

    const renderMenuItems = () => menuItems.map((items, index) =>
        <S.Nav to={menuLinks[index]}
            exact
        >{items}</S.Nav>
    )

    return (
        <S.ContainerHeader >
            <S.Logo src={logo} />

            <S.MenuList >{renderMenuItems()}</S.MenuList>
        </S.ContainerHeader>
    )
}
export default Header
