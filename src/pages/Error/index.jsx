import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { custom } from '../../utils/custom'
/**
 * CSS for component using styled.components
 */
const Contents = styled.main`
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    text-decoration-style: none;
`
const Number = styled.h1`
    color: ${custom.colors.primaryRed};
`
const Links = styled(Link)`
    text-decoration: none;
    &:hover {
        color: ${custom.colors.primaryRed};
        transform: scale(1.4);
    }
`
const Logo = styled.img``
const Title = styled.h2``

/**
 * Render Error 404 page
 * @returns {JSX}
 */

function Error() {
    return (
        <Layout>
            <Contents>
                <Logo src={logo} alt="logo sportSee" />
                <Number>ERROR 404</Number>
                <Title>Désolé, cette page n'existe pas encore !</Title>
                <Links to="/">
                    Pour retourner à la page d'accueil, cliquez ici.
                </Links>
            </Contents>
        </Layout>
    )
}

export default Error
