import * as S from './Style'
import { Header } from '../../Components/MenuNav/Index'

export const Layout = ({children: page}) => (
    <S.Container>
        <Header />
        {page}
    </S.Container>
)

export default Layout